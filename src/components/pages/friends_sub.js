import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../css/Home_Page.css";

const friends_sub = () => {
  const handles=["fastenstar","shyamer3"];
  const url ="";
  handles.forEach((user_name)=>{
     url =
    "https://codeforces.com/api/user.status?handle=" +
    user_name;
  })

 const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const allData = await Promise.all(
      handles.map((handle) =>
        axios
          .get(`https://codeforces.com/api/user.status?handle=${handle}`)
          .then((response) =>
            response.data.result
              .sort(
                (a, b) =>
                  b.creationTimeSeconds - a.creationTimeSeconds
              )
              
          )
      )
    );
    setData(allData.flat());
  };
  fetchData();
}, [handles]);



  const tableRows = data.map((submission) => (
    
    <tr key={submission.id}>
      {/* <td>{new Date(submission.creationTimeSeconds * 1000).toLocaleString()}</td> */}
      <td>
        {submission.author.members[0].handle}
      </td>
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
            <th>User_Name</th>
            <th>Ques_Name</th>
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

export default friends_sub