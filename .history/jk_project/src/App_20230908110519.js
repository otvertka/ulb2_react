import React, { useState } from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import classes from "./styles/App.css";
import PostItem from "./component/PostItem";

function App() {
const [posts, setPosts] = useState([
  { id: 1, title: "JavaScript", body: "Description" },
  { id: 2, title: "JavaScript 2", body: "Description" },
  { id: 3, title: "JavaScript 3", body: "Description" }
])

  return (
    <div className="App">
      <PostItem post={} />
     
    </div>
  );
}

export default App;
