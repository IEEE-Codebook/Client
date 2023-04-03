import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/userSubmissions.css";
import { useEffect } from "react";
import { reset } from "../../api/leaderboardSlice";

const Results = () => {
  const dispatch = useDispatch();
  const { board, isLoading, isError, message } = useSelector(
    (state) => state.board
  );
  useEffect(() => {
    dispatch(reset());
  }, []);
  const b = board.sortedLeaderboard.slice(
    0,
    board.sortedLeaderboard.length - 2
  );

  let rank = 1; 

  return (
    <div className="user-sub_table-container">
      {b.length > 0 ? (
        <>
          <table >
            <thead>
              <tr>
                <th>Local Rank </th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {b.map((item) => {
                return (
                  <tr>
                    <td className="user-sub_td">{rank++}</td>
                    <td className="user-sub_td">{item.username}</td>
                    <td className="user-sub_td">{item.score}</td>
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
};

export default Results;
