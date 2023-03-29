import React, { useEffect } from "react";
import { getSubmissions } from "../../../api/submissionSlice";
import "../../../css/Home_Page.css";
import Spinner from "../../Spinner";
import { useDispatch, useSelector } from "react-redux";

function FriendsSubmission() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {
    atcoder_submission,
    submissions,
    isRetrieved,
    isLoading,
    isError,
  } = useSelector((state) => state.submission);
  useEffect(() => {
    const token = user.token ? user.token : user;
    dispatch(getSubmissions(token));
  }, [user, dispatch, getSubmissions]);

  if (isRetrieved) {
    if (submissions.length == 0 && atcoder_submission.length == 0) {
      return <h1>No Friends Submissions</h1>;
    }
    let tableRows, atRows;
    if (atcoder_submission.length != 0) {
      atRows = atcoder_submission[1].slice(0, 5).map((submission) => (
        <tr key={submission.id}>
          <td>
            <a
              href={`https://atcoder.jp/contests/${submission.contest_id}/tasks/${submission.problem_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {submission.problem_id}
            </a>
          </td>
          <td>{submission.result}</td>
          <td>{atcoder_submission[0]}</td>
        </tr>
      ));
    }
    if (submissions.length != 0) {
      tableRows = submissions[1].slice(0, 5).map((submission) => (
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
          <td>{submissions[0]}</td>
          {/* <td>{submission.timeConsumedMillis} ms</td>
          <td>{submission.memoryConsumedBytes / 1024} KB</td> */}
        </tr>
      ));
    }
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {/* <th>When</th> */}
              <th>Name</th>
              {/* <th>Language</th> */}
              <th>Verdict</th>
              <th>Friend Name</th>
              {/* <th>Time</th> */}
              {/* <th>Memory</th> */}
            </tr>
          </thead>
          <tbody>{tableRows} {atRows}</tbody>
        </table>
      </div>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }
}

export default FriendsSubmission;
