import React, { useState } from "react";
import "../css/Contest.css"

function Input(props) {
  const [platform, setPlatform] = useState("");
  const [realPlatform, setRealPlatform] = useState("");

  function handleChange(event) {
    const platformName = event.target.value;
    setPlatform(platformName);
  }

  function handleClick(event) {
    setRealPlatform(platform);

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
        <select onChange={handleSelect} value={platform}>
          <option value="">Select a platform</option>
          <option value="codeforces">codeforces</option>
          <option value="codechef">codechef</option>
          <option value="hackerrank">HackerRank</option>
          <option value="hackerearth">HackerEarth</option>
          <option value="leetcode">Leetcode</option>
          <option value="atcoder">Atcoder</option>
          <option value="topcoder">Topcoder</option>
          
        </select>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default Input;
