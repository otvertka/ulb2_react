import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(++count);
  }
  function decr() {
    setCount(--count);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incr}>Increment </button>
      <button onClick={decr}>Decrement </button>
    </div>
  );
}

export default App;
