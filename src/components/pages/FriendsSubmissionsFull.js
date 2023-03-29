import React, { useState, useEffect } from "react";
import "../../css/userSubmissions.css";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import { useDispatch } from "react-redux";
import { getSubmissions } from "../../api/submissionSlice";

function FriendsSubmissionsFull() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {
    atcoder_submission,
    submissions,
    isRetrieved,
    isLoading,
    message,
    isError,
  } = useSelector((state) => state.submission);
  useEffect(() => {
    const token = user.token ? user.token : user;
    dispatch(getSubmissions(token));
  }, [user, dispatch, getSubmissions]);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) return <h1>{message}</h1>;

  if (isRetrieved) {
    if (submissions.length == 0 && atcoder_submission.length == 0) {
      return <h1>No Friends Submissions</h1>;
    }
    let tableRows, atRows;
    if (atcoder_submission.length != 0) {
      atRows = atcoder_submission[1].map((submission) => (
        <tr key={submission.id}>
          <td className="user-sub_td">{atcoder_submission[0]}</td>
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
    }
    if (submissions.length != 0) {
      tableRows = submissions[1].map((submission) => (
        <tr key={submission.id}>
          <td>{submissions[0]}</td>
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
    }
    return (
      <div className="user-sub_table-container">
        <h1>Friends Submissions</h1>
        <table>
          <thead>
            <tr>
              <th>Friend Username</th>
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

export default FriendsSubmissionsFull;
