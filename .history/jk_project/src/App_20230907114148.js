import React, { useState } from "react";
import Counter from "./component/Counter";

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
    setValue(event.target.value);
  }

  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <input onChange={inpHandler} type="text" value={value} />
    </div>
  );
}

export default App;
