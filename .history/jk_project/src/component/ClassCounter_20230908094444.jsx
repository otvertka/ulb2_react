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

  incrHandl() {
    this.setState({ count: this.state.count + 1 });
  }
  decrHandl() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrHandl}>Increment</button>
        <button onClick={this.decrHandl}>Decrement</button>
      </>
    );
  }
}

export default ClassCounter;
