import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let incrHandl = setCount++;

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incrHandl}>Increment </button>
      {/* <button onClick={() => (likes -= 1)}>Increment </button> */}
    </div>
  );
}

export default App;
