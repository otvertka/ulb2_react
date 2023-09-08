import React, { useState } from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import classes from "./styles/App.css";
import PostItem from "./component/PostItem";

function App() {
  // const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <PostItem value={"2222"} item={{ title: 0, description: "Lalala" }} />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default App;
