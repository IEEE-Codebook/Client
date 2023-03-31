import React, { useEffect, useState } from 'react';
import * as d3 from "d3";
import axios from 'axios';
import "../css/Heatmap.css"
import { useSelector } from 'react-redux';

const Heatmap = () => {
  const {codeforces} = useSelector((state) => state.profile);

    useEffect(()=> {
        console.log(codeforces)
        document.getElementById('heat-map-div').innerHTML = '';
        document.getElementById('linechart-div').innerHTML = '';
        document.getElementById('stats').innerHTML = '';
        var url = 'http://codeforces.com/api/user.status?handle=' + codeforces;
        console.log(url)
        axios.get(url).then((response) => {
            const allData = response.data.result;
            console.log(allData);
            setData(allData);
            process(allData);
            // linechart(allData);
        });
    }, [codeforces]) 

    const [data, setData] = useState([]);
    var rect, lineFunction, lineGraph, totalLength, tooltipLineX, tooltipLineY;

    function process(results) {
        var count = {};
        var minYear, maxYear;
    
        maxYear = (new Date(results[0].creationTimeSeconds * 1000)).getUTCFullYear();
        minYear = (new Date(results[results.length - 1].creationTimeSeconds * 1000)).getUTCFullYear();
    
        results = results.filter(function(result) {
            return result.verdict === "OK";
        });
    
        results.forEach(function(result) {
            var date = new Date(result.creationTimeSeconds * 1000);
            var year = date.getUTCFullYear();
            var month = date.getUTCMonth();
            if (month < 9) {
                month = '0' + (month + 1);
            } else {
                month = month + 1;
            }
            var day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            count[year + '' + month + '' + day] = (count[year + '' + month + '' + day] + 1) || 1;
        });
    
        mapdata(count, minYear, maxYear);
    }


    function mapdata(count, minYear, maxYear) {
        var width = 900,
            height = 105,
            cellSize = 12; // cell size
        var week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var day = d3.timeFormat("%w"),
            week = d3.timeFormat("%U"),
            percent = d3.format(".1%"),
            format = d3.timeFormat("%Y%m%d");
        var parseDate = d3.timeFormat("%Y%m%d").parse;


        var svg = d3.select(".calender-map").selectAll("svg")
            .data(d3.range(minYear, maxYear + 1))
            .enter().append("svg")
            .attr("width", '100%')
            .attr("data-height", '0.5678')
            .attr("viewBox", '0 0 900 105')
            .attr("class", "RdYlGn")
            .append("g")
            .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

        svg.append("text")
            .attr("transform", "translate(-38," + cellSize * 3.5 + ")rotate(-90)")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d;
            });

        for (var i = 0; i < 7; i++) {
            svg.append("text")
                .attr("transform", "translate(-5," + cellSize * (i + 1) + ")")
                .style("text-anchor", "end")
                .attr("dy", "-.25em")
                .text(function(d) {
                    return week_days[i];
                });
        }

        rect = svg.selectAll(".day")
            .data(function(d) {
                return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
            })
            .enter()
            .append("rect")
            .attr("class", "day")
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("x", function(d) {
                return week(d) * cellSize;
            })
            .attr("y", function(d) {
                return day(d) * cellSize;
            })
            .attr("fill", '#fff')
            .datum(format);

        

        var legend = svg.selectAll(".legend")
            .data(month)
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                return "translate(" + (((i + 1) * 50) + 8) + ",0)";
            });

        legend.append("text")
            .attr("class", function(d, i) {
                return month[i];
            })
            .style("text-anchor", "end")
            .attr("dy", "-.25em")
            .text(function(d, i) {
                return month[i];
            });

        svg.selectAll(".month")
            .data(function(d) {
                return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1));
            })
            .enter().append("path")
            .attr("class", "month")
            .attr("id", function(d, i) {
                return month[i];
            })
            .attr("d", monthPath);


        var tooltip = d3.select('body').append('div')
            .attr('class', 'tooltip');


        d3.selectAll('rect')
            .on('mouseover', function(event, d) {
                if (this.getAttribute('data-title') != null) {
                    tooltip.style('display', 'block')
                        .html(this.getAttribute('data-title'))
                        .style('left', (event.pageX + 5) + 'px')
                        .style('top', (event.pageY) + 'px');
                }
            })
            .on('mouseout', function(event, d) {
                tooltip.style('display', 'none');
            });
        

        document.querySelector('input[type=radio]').checked = true;
        plotHM(count);

        function monthPath(t0) {
            var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
                d0 = +day(t0),
                w0 = +week(t0),
                d1 = +day(t1),
                w1 = +week(t1);
            return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize +
                "H" + w0 * cellSize + "V" + 7 * cellSize +
                "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize +
                "H" + (w1 + 1) * cellSize + "V" + 0 +
                "H" + (w0 + 1) * cellSize + "Z";
        }
    }

    function getStats(data) {
        var stats = [];
        stats['maxsub'] = 0;
        stats['maxsub'] = Math.max.apply(stats['maxsub'], Object.keys(data).map(function(e) {
            return data[e];
        }));
        
        stats['sum'] = 0;
        for (let key in data) {
            stats['sum'] += data[key];
        }
        stats['avg'] = (stats['sum'] / Object.keys(data).length).toPrecision(4);
        stats['numdays'] = Object.keys(data).length;
        document.getElementById('stats').innerHTML = 'STATS<br>';
        document.getElementById('stats').innerHTML = stats['sum'] + ' submissions over a period of ' + stats['numdays'] + ' different days.';
        document.getElementById('stats').innerHTML += '<br>Average number of submissions are ' + stats['avg'];
        document.getElementById('stats').innerHTML += '<br>Max Submissions in a day are ' + stats['maxsub'];
        return stats;
    }
    
    // plot data on the map
    function plotHM(data) {
        const stats = getStats(data);
        const color = d3.scaleLinear().range(["#d6e685", '#1e6823']).domain([1, stats['maxsub']]);
        console.log(rect)
        rect.transition().duration(750)
          .attr("fill", function(d) {
            return (d in data) ? color(data[d]): 'white';
          })
          .attr("data-title", function(d) {
            return (d in data) ? (d.substring(6) + '/' + d.substring(4, 6)) + " Submissions: " + data[d]: null;
          });
    }

    function linechart(data) {
        createLCStructure(data);
    }

    function weekifyData(results, type='') {
        // var weekOfYear = function(date){
        //     var d = new Date(+date);
        //     d.setHours(0,0,0);
        //     d.setDate(d.getDate()+4-(d.getDay()||7));
        //     return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
        // };
    
        Date.prototype.getWeek = function() {
            var onejan = new Date(this.getFullYear(), 0, 1);
            return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
        }
    
        var attachYearToLineYear = function(year) {     // create drop-down menu
            var op = document.createElement('option');
            op.setAttribute('value', year);
            op.appendChild(document.createTextNode(year));
            var yearDropDown = document.getElementById('line-year');
            yearDropDown.insertBefore(op, yearDropDown.firstChild);
            yearDropDown.selectedIndex = 0;
        }
    
        var count = [];
        results.forEach(function(result) {
            if (result.verdict === "OK") {  
                var date = new Date(result.creationTimeSeconds * 1000);
                var year = date.getUTCFullYear();
                
                if (count[year] === undefined){
                    count[year] = Array.apply(null, Array(54)).map(Number.prototype.valueOf,0);
                    attachYearToLineYear(year);
                }
                var week = new Date(result.creationTimeSeconds * 1000).getWeek();
                ++count[year][week];
                // count[year + '' + week] = (count[year + '' + week] + 1) || 1;
            }
        });
    
    
    
        return count;
    }
    
    function createLCStructure(data) {
      data = weekifyData(data);
        var margin = {top: 40, right: 40, bottom: 40, left: 40};
        var height = 320 - margin.top - margin.bottom,
            width = 1000 - margin.left - margin.right;
    
        var linesvg = d3.select("#linechart-div").append('svg').attr("width", margin.right + width + margin.left).attr("height", margin.bottom + height + margin.top);
    
        var yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) {
                                 return ((d === undefined) ? 0 : Math.max.apply(null, d));
                    })]).range([height, 0]);
    
      var xScale = d3.scaleLinear()
                    .domain([0, 53])
                    .range([0, width]);
    

        // Create axes
        var hAxis = d3.axisBottom(xScale)
        .ticks(20);

        var vAxis = d3.axisLeft(yScale)
        .ticks(10);

    
      var hGuide = linesvg.append('g').call(hAxis).attr('id', 'x-axis').attr('transform', 'translate(' + margin.left + ',' + (margin.top + height) + ')');
      hGuide.selectAll('path').style({fill: 'none', stroke: '#000'})
      hGuide.selectAll('line').style({stroke: '#000'});
    
      var vGuide = linesvg.append('g').call(vAxis).attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      vGuide.selectAll('path').style({fill: 'none', stroke: '#000'})
      vGuide.selectAll('line').style({stroke: '#000'});
    
      lineFunction = d3.line()
        .x(function(d, i) { return xScale(i); })
        .y(function(d, i) { return yScale(d); })
        .curve(d3.curveLinear);
    
      var svgGroup = linesvg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
      lineGraph = svgGroup.append("path")
                            // .attr("d", lineFunction()
                            .attr("d", lineFunction(data[Object.keys(data)[0]]))
                            .attr("stroke", "#000")
                            .attr("stroke-width", 3)
                            .attr("fill", "none");
      totalLength = lineGraph.node().getTotalLength();
      totalLength = 4000;
    
      lineGraph.style("stroke-dasharray", totalLength + " " + totalLength)
        .style("stroke-dashoffset", totalLength)
        .transition()
        .duration(1000)
        .ease(d3.easeLinear)
        .style("stroke-dashoffset", 0);
    
      var ctooltip = d3.select('#linechart-div').append('div')
                      .attr('class', 'tooltip');
    
      var circles = svgGroup.selectAll("circle")                                    
              .data(data[Object.keys(data)[0]])
              .enter().append("circle")                            
              .attr("r", 4)
              .attr("z-index", 100)
              .attr("cx", function(d, i) { return xScale(i); })
              .attr("cy", function(d, i) { return yScale(d); })// - yScale(d[1] * 100 / (i + 1)); })
              .attr("data-title", function(d, i) { return "Week: " + i + ", Sub: " + d; })
              .style({stroke:'#fff', visbility: 0})

              
              
            
  
    
        document.getElementById('line-year').addEventListener('change', populateLineChartWithData, false);
        
        function populateLineChartWithData() {
          lineGraph.transition().duration(1200).ease('elastic').attr("d", lineFunction(data[this.value]));
          circles.data(data[parseInt(this.value)]).transition().ease('back').duration(750).delay(function(d, i) { return i * 45; })
                  .attr("cy", function(d, i) { return yScale(d); }).attr("data-title", function(d, i) { return "Week: " + i + ", Sub: " + d; });
          ctooltip.style('display', 'none');
          }
    
    }
    



    return (
        <div>
                <form role="form" id="hide">
                    <input 
                    type="text" 
                    placeholder="Type existing codeforces handle" />
                    <label><input type="radio" className="participantTypeRadio" name="participantType" value="A" checked />All</label>
                    <label><input type="radio" className="participantTypeRadio" name="participantType" value="C" />Contest</label>
                    <label><input type="radio" className="participantTypeRadio" name="participantType" value="P" />Practice</label>
                    <label><input type="radio" className="participantTypeRadio" name="participantType" value="V" />Virtual</label>
                    <select name="line-year" id="line-year"></select>
                    <button type="submit" >Submit</button>
                </form>
                <div id="stats"></div>
                <div id="linechart-div"></div>
                <div id="heat-map-div" className="calender-map"></div>
        </div>
    );
}

export default Heatmap;