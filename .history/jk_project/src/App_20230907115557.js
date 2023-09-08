import React, { useState } from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";

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
      <ClassCounter />
    </div>
  );
}

export default App;
