import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/userSubmissions.css";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import { useDispatch } from "react-redux";
import { getProfile } from "../../api/profileSlice";

function UserSubmission() {
  const dispatch = useDispatch();
  const { atcoder, codeforces, isLoading, isRetrieved } = useSelector(
    (state) => state.profile
  );
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [atSub, setAtcoderSub] = useState([]);
  useEffect(() => {
    const token = user.token ? user.token : user;
    dispatch(getProfile(token));
  }, [user, dispatch, getProfile]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isRetrieved) {
    const url =
      "https://codeforces.com/api/user.status?handle=" +
      codeforces +
      "&from=1&count=100";
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
    const atRows = atSub.map((submission) => (
      <tr key={submission.id}>
        <td className="user-sub_td">Atcoder</td>
        <td className="user-sub_td">
          {new Date(submission.epoch_second * 1000).toLocaleString()}
        </td>
        <td className="user-sub_td">
          <a
            href={`https://atcoder.jp/contests/${submission.contest_id}/tasks/${submission.problem_id}`}
            target="_blank"
            rel="noreferrer"
          >
            {submission.problem_id}
          </a>
        </td>
        <td className="user-sub_td">{submission.language}</td>
        <td className="user-sub_td">{submission.result}</td>
        <td className="user-sub_td">{submission.execution_time} ms</td>
        <td className="user-sub_td">Not Available</td>
        
      </tr>
    ));
    const tableRows = data.map((submission) => (
      <tr key={submission.id}>
        <td className="user-sub_td">
          Codeforces
        </td>
        <td className="user-sub_td">
          {new Date(submission.creationTimeSeconds * 1000).toLocaleString()}
        </td>
        <td className="user-sub_td">
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
        <td className="user-sub_td">
          {submission.memoryConsumedBytes / 1024} KB
        </td>
      </tr>
    ));

    return (
      <div className="user-sub_table-container">
        <h1>{codeforces} Submissions</h1>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>When</th>
              <th>Name</th>
              <th>Language</th>
              <th>Verdict</th>
              <th>Time</th>
              <th>Memory</th>
            </tr>
          </thead>
          <tbody>{tableRows} {atRows}</tbody>
        </table>
      </div>
    );
  }
}

export default UserSubmission;
