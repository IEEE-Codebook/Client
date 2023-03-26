import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../../../css/Home_Page.css";

const Home_Page_Submissions = () => {
  const [data, setData] = useState([]);

  const handles = useMemo(() => ["shyamer3","adityachauhan2501"], []);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await Promise.all(
        handles.map((handle) =>
          axios
            .get(`https://codeforces.com/api/user.status?handle=${handle}`)
            .then((response) => response.data.result)
        )
      );
      setData(allData.flat().sort((a, b) => b.creationTimeSeconds - a.creationTimeSeconds).slice(0,10));
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

export default Home_Page_Submissions;
