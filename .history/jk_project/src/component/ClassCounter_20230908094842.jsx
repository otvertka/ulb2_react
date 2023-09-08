import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.incrHandl = this.incrHandl.bind(this);
    this.decrHandl = this.decrHandl.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default ClassCounter;
