import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrHandl() {
    this.setCounter({ count: this.state.count + 1 });
  }
  decrHandl() {
    this.setCounter({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <h1>{counter}</h1>
        <button onClick={incrHandl}>Increment</button>
        <button onClick={decrHandl}>Decrement</button>
      </>
    );
  }
}
