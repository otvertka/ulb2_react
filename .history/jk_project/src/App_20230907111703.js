import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incr() {}

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incr}>Increment </button>
      {/* <button onClick={() => (likes -= 1)}>Increment </button> */}
    </div>
  );
}

export default App;
