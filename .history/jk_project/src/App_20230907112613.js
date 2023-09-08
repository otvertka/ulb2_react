import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  function incr() {
    setCount(count + 1);
  }
  function decr() {
    setCount(count - 1);
  }
  function inpHandler(event) {
    // event.preventDefault();
    setValue(event.target.value);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input onChange={inpHandler} type="text" value={value} />
      <button onClick={incr}>Increment </button>
      <button onClick={decr}>Decrement </button>
    </div>
  );
}

export default App;
