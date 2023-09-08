import React, { useState } from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import classes from "./styles/App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
        </div>
        <div>Javascript - мова програмування</div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
