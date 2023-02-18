// import React from "react";
// import data from "./ApiCall";

// function App() {
//   console.log(data)
//   return(
//   <div>
//     <Header />

//   </div>)
// }

// export default App;

import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import RealApiCall from "./RealApiCall";
// import Apicall from "./ApiCall"
// import dropdown from "./Dropdown";
function App() {
  const [p, sp] = useState("");

  function setter(platformName) {
    // console.log(platformName)
    sp(platformName);
  }

  console.log("yo")

  return (
    <div>
      {/* <h1>{p}</h1> */}

      <Header />
      <Input clickee={setter} />

      <RealApiCall platformName={p} />
    </div>
  );
}

export default App;
