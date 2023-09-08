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
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
        </div>
        <div>Javascript - мова програмування</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
}

export default App;
