import React from "react";

function App() {
  let likes = 0;
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={() => likes++}>Increment </button>
    </div>
  );
}

export default App;
