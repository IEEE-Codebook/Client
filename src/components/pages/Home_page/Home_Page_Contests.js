import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/Home_Page.css";

function Home_Page_Contests() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://kontests.net/api/v1/codeforces";

    // switch (props.platformName) {
    //   case "codeforces":
    //     url = "https://kontests.net/api/v1/codeforces";
    //     break;
    //   case "codechef":
    //     url = "https://kontests.net/api/v1/code_chef";
    //     break;
    //   case "leetcode":
    //     url = "https://kontests.net/api/v1/leet_code";
    //     break;
    //   case "hackerrank":
    //     url = "https://kontests.net/api/v1/hacker_rank";
    //     break;
    //   case "hackerearth":
    //     url = "https://kontests.net/api/v1/hacker_earth";
    //     break;
    //   case "atcoder":
    //     url = "https://kontests.net/api/v1/at_coder";
    //     break;
    //   case "topcoder":
    //     url = "https://kontests.net/api/v1/top_coder";
    //     break;
    //   default:
    //     console.log("Platform not found");
    //     return;
    // }

    axios.get(url).then((response) => {
      const allData = response.data;
      allData.sort((a, b) => a.start_time.localeCompare(b.start_time));
      setData(allData);
    });
  }, []);

  return (
    <div className="table-container">
      {data.length > 0 ? (
        <>
          {/* <h1>{props.platformName.charAt(0).toUpperCase() + props.platformName.slice(1)}</h1> */}
          <table className="table">
            <thead>
              <tr>
                <th>Contest Name</th>
                {/* <th>Duration (in hours)</th> */}
                <th>Start Date</th>
                {/* <th>Start Time (UTC)</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                // const duration = (item.duration / 3600).toFixed(2);
                const [date, ] = item.start_time.split("T");
                // const startTime = new Date(item.start_time);
                // const startTimeString = startTime.toLocaleString("en-US", {
                //   hour: "numeric",
                //   minute: "numeric",
                //   hour12: true,
                // });
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    {/* <td>{duration}</td> */}
                    <td>{date}</td>
                    {/* <td>{startTimeString}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h1>No Contest </h1>
      )}
    </div>
  );
}

export default Home_Page_Contests;
