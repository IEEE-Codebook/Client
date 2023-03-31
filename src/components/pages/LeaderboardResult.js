import React from "react";
import { useSelector } from "react-redux";
import "../../css/userSubmissions.css"

const Results = () => {
    const { board, isLoading, isError, message } = useSelector(
        (state) => state.board
    );


    const b = board.sortedLeaderboard.slice(0, board.sortedLeaderboard.length -2);

    let rank = 1;

    return (
      <div className="user-sub_table-container">
          {b.length > 0 ? (
                        <>
                        <table className="table">
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
                                <tr >
                                    <td>{rank++}</td>
                                    <td>{item.username}</td>
                                    <td>{item.score}</td>
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