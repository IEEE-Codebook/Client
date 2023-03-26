import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/userSubmissions.css";

function UserSubmission() {
  const url =
    "https://codeforces.com/api/user.status?handle=" +
    "fastenstar" +
    "&from=1&count=1000";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      const allData = response.data.result;
      setData(allData);
    });
  }, [url]);

  const tableRows = data.map((submission) => (
    <tr key={submission.id}>
      <td>{new Date(submission.creationTimeSeconds * 1000).toLocaleString()}</td>
      <td>
        <a
          href={`https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`}
          target="_blank"
          rel="noreferrer"
        >
          {submission.problem.name}
        </a>
      </td>
      <td className="user-sub_td">{submission.programmingLanguage}</td>
      <td className="user-sub_td">{submission.verdict}</td>
      <td className="user-sub_td">{submission.timeConsumedMillis} ms</td>
      <td className="user-sub_td">{submission.memoryConsumedBytes / 1024} KB</td>
    </tr>
  ));

  return (
    <div className="user-sub_table-container">
      <h1>fastenstar Submissions</h1>
      <table>
        <thead>
          <tr>
            <th>When</th>
            <th>Name</th>
            <th>Language</th>
            <th>Verdict</th>
            <th>Time</th>
            <th>Memory</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default UserSubmission;
