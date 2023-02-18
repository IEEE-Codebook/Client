import React, { useState, useEffect } from "react";
import axios from "axios";
// import ShowData from "./ShowData";
function RealApiCall(props) {
  if (props.platformName === "codeforces") {
    const [cfdata, setcfData] = useState([]);
    const url =
      "https://codeforces.com/api/contest.list?gym=false&phase=BEFORE";

    useEffect(() => {
      getAllData();
    }, []);

    const getAllData = () => {
      axios.get(url).then((response) => {
        const allData = response.data;
        const { result } = allData;
        setcfData(result);
      });
    };
    // console.log(cfdata[0]);

    // return
    return (
      <div>
        <h1>codeforces</h1>
        <table>
          <tr>
            <th>Contest Name</th>
            <th>Duration(in hours ) </th>
            <th>Start Time and Date</th>
          </tr>
          {cfdata.map((item) => {
            if (item.phase === "BEFORE") {
              const duration = item.durationSeconds / 3600;
              // const b= item.startTimeSeconds
              // const d = new Date(b); // The 0 there is the key, which sets the date to the epoch
              // const strDate = d.toLocaleString();
              var myDate = new Date(item.startTimeSeconds * 1000);
              const dateAndTime = myDate.toLocaleString();
              // const abc=ab.getDate();
              // console.log(abc)
              // d.setUTCSeconds(d);
              // console.log(strDate)
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{duration}</td>
                  <td>{dateAndTime}</td>
                </tr>
                // <h3>
                //   {item.id} {item.name} {item.durationSeconds}{" "}
                //   {item.startTimeSeconds}
                // </h3>
              );
            }
          })}
        </table>
      </div>
    );
  }
  else if(props.platformName==="codechef"||props.platformName==="leetcode"||props.platformName==="hackerearth"||props.platformName==="hackerrank"){
    return <h1>currently no data</h1>
  }
  else {
    return <h1></h1>;
  }
}
export default RealApiCall;
