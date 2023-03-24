import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/Home_Page.css";


function Home_Page_Submissions() {
  const url =
    "https://codeforces.com/api/user.status?handle=" +
    "fastenstar" +
    "&from=1&count=5";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      const allData = response.data.result;
      setData(allData);
    });
  }, [url]);

  const tableRows = data.map((submission) => (
    <tr key={submission.id}>
      {/* <td>{new Date(submission.creationTimeSeconds * 1000).toLocaleString()}</td> */}
      <td>
        <a
          href={`https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`}
          target="_blank"
          rel="noreferrer"
        >
          {submission.problem.name}
        </a>
      </td>
      {/* <td>{submission.programmingLanguage}</td> */}
      <td>{submission.verdict}</td>
      {/* <td>{submission.timeConsumedMillis} ms</td>
      <td>{submission.memoryConsumedBytes / 1024} KB</td> */}
    </tr>
  ));

  return (
    <div className="table-container">
     
      <table className="table">
        <thead>
          <tr>
            {/* <th>When</th> */}
            <th>Name</th>
            {/* <th>Language</th> */}
            <th>Verdict</th>
            {/* <th>Time</th> */}
            {/* <th>Memory</th> */}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Home_Page_Submissions;
