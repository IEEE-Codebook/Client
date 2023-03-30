import React, { useState, useEffect } from "react";
import axios from "axios";
import { getProfile } from "../../../api/profileSlice";
import "../../../css/Home_Page.css";
import Spinner from "../../Spinner";
import { useDispatch, useSelector } from "react-redux";

function Home_Page_Submissions() {
  const dispatch = useDispatch();
  const {  atcoder, codeforces, isLoading, isRetrieved } = useSelector(
    (state) => state.profile
  );
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [atcoderSub, setAtcoderSub] = useState([]);
  useEffect(() => {
    const token = user.token ? user.token : user;
    dispatch(getProfile(token));
  }, [user, dispatch, getProfile]);

  if (isRetrieved) {
    const url =
      "https://codeforces.com/api/user.status?handle=" +
      codeforces +
      "&from=1&count=5";

    axios
      .get(
        "https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=" +
          atcoder +
          "&from_second=0"
      )
      .then((res) => {
        setAtcoderSub(res.data);
      });
    axios.get(url).then((response) => {
      const allData = response.data.result;
      setData(allData);
    });
    const atRow = atcoderSub.slice(0,5).map((submission) => (
      <tr key={submission.id}>
        <td>
          <a
            href={`https://atcoder.jp/contests/${submission.contest_id}/tasks/${submission.problem_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {submission.problem_id}
          </a>
        </td>
        <td>{submission.result}</td>
      </tr>
    ));
    const tableRows = data.map((submission) => (
      <tr key={submission.id}>
        {/* <td>{new Date(submission.creationTimeSeconds * 1000).toLocaleString()}</td> */}
        <td>
          <a
            href={`https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`}
            target="_blank"
            rel="noopener noreferrer"
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
          <tbody>{atRow} {tableRows}</tbody>
        </table>
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }
}

export default Home_Page_Submissions;
