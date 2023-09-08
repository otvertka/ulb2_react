import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrHandl = setCount++;

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={incrHandl}>Increment </button>
      <button onClick={() => (likes -= 1)}>Increment </button>
    </div>
  );
}

export default App;
