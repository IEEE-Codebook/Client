import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Spinner() {
  const override = {
    display: "block",
    margin: "auto",
    borderColor: "red",
  };
  return (
    <div className="sweet-loading">
     <BeatLoader color="#36d7b7" />
    </div>
  );
}

export default Spinner;
