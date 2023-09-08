import React, { useState } from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import classes from "./styles/App.css";
import PostItem from "./component/PostItem";
import PostList from "./component/PostList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python 2", body: "Description" },
    { id: 3, title: "Python 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts} title="Список постов 2" />
    </div>
  );
}

export default App;
