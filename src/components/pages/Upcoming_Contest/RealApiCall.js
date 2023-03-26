import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/Contest.css"

function RealApiCall(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url;
    switch (props.platformName) { 
      case "codeforces":
        url = "https://kontests.net/api/v1/codeforces";
        break;
      case "codechef":
        url = "https://kontests.net/api/v1/code_chef";
        break;
      case "leetcode":
        url = "https://kontests.net/api/v1/leet_code";
        break;
      case "hackerrank":
        url = "https://kontests.net/api/v1/hacker_rank";
        break;
      case "hackerearth":
        url = "https://kontests.net/api/v1/hacker_earth";
        break;
      case "atcoder":
        url = "https://kontests.net/api/v1/at_coder";
        break;
      case "topcoder":
        url = "https://kontests.net/api/v1/top_coder";
        break;
      default:
        console.log("Platform not found");
        return;
    }

    axios.get(url).then((response) => {
      const allData = response.data;
      allData.sort((a, b) => a.start_time.localeCompare(b.start_time));
      setData(allData);
    });
  }, [props.platformName]);

  return (
    <div className=".contest_table-container">
      {data.length > 0 ? (
        <>
          <h1>{props.platformName.charAt(0).toUpperCase() + props.platformName.slice(1)}</h1>
          <table className=".contest_table">
            <thead>
              <tr>
                <th className="contest_th">Contest Name</th>
                <th className="contest_th">Duration (in hours)</th>
                <th className="contest_th">Start Date</th>
                <th className="contest_th">Start Time (UTC)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                const duration = (item.duration / 3600).toFixed(2);
                const [date, time] = item.start_time.split("T");
                const startTime = new Date(item.start_time);
                const startTimeString = startTime.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                });
                return (
                  <tr key={item.id}>
                    <td className="contest_td">{item.name}</td>
                    <td className="contest_td">{duration}</td>
                    <td className="contest_td">{date}</td>
                    <td className="contest_td">{startTimeString}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default RealApiCall;
