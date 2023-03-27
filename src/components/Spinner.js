import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  const override = {
    display: "block",
    margin: "auto",
    borderColor: "red",
  };
  return (
    <div className="sweet-loading">
      <ClipLoader
        cssOverride={override}
        size={150}
        color={"#123abc"}
        loading="true"
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
