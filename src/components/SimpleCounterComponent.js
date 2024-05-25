import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  state = {
    counter: 0,
    isToggled: false,
  };

  toggleCounter = () => {
    const { isToggled } = this.state;
    this.setState({
      isToggled: isToggled ? false : true,
    });
  };

  incrementCounter = () => {
    const { isToggled, counter } = this.state;

    if (!isToggled) return;

    this.setState({
      counter: counter + 1,
    });
  };

  renderCounter() {
    return <p>Counter: {this.state.counter}</p>;
  }

  renderToggleStatus() {
    return (
      <p>
        Toggle Counter (Currently {this.state.isToggled ? "True" : "False"})
      </p>
    );
  }

  renderButtons() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.toggleCounter}>Set toggle</button>
      </div>
    );
  }

  render() {
    console.log(`This is Simple Component`);
    return (
      <div>
        <h1>Simple Counter</h1>
        {this.renderCounter()}
        {this.renderToggleStatus()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default SimpleCounterComponent;
