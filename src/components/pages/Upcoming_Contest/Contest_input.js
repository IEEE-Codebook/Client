import React, { useState } from "react";
import "../../../css/Contest.css";

function Input(props) {
  const [platform, setPlatform] = useState("");
  // function handleChange(event) {
  //   const platformName = event.target.value;
  //   setPlatform(platformName);
  // }

  function handleClick(event) {
    
    props.clickee(platform);
    setPlatform("");
    event.preventDefault();
  }

  function handleSelect(event) {
    setPlatform(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <select
          className="contest_select"
          onChange={handleSelect}
          value={platform}
        >
          <option className="contest_option" value="">
            Select a platform
          </option>
          <option className="contest_option" value="codeforces">
            codeforces
          </option>
          <option className="contest_option" value="codechef">
            codechef
          </option>
          <option className="contest_option" value="hackerrank">
            HackerRank
          </option>
          <option className="contest_option" value="hackerearth">
            HackerEarth
          </option>
          <option className="contest_option" value="leetcode">
            Leetcode
          </option>
          <option className="contest_option" value="atcoder">
            Atcoder
          </option>
          <option className="contest_option" value="topcoder">
            Topcoder
          </option>
        </select>
        <button className="contest_button" type="submit">
          Go
        </button>
      </form>
    </div>
  );
}

export default Input;
