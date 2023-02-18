import React, { useState } from "react";

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

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="Platform"
          placeholder="CP Platform Name In LowerCase"
          value={platform}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default Input;
