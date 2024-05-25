import React, { PureComponent } from "react";

class PureCounterComponent extends PureComponent {
  state = {
    counter: 0,
    toggle: false,
  };

  toggleHandler = () => {
    this.setState((prevState) => {
      let newToggleState = false;
      if (!prevState.toggle) {
        newToggleState = true;
      }
      return { toggle: newToggleState };
    });
  };

  incrementCounter = () => {
    const { toggle, counter } = this.state;

    if (!toggle) return;

    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter, toggle } = this.state;
    console.log(`This is Pure Component`);

    return (
      <div>
        <h1>Pure Counter</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => this.incrementCounter()}>Increment</button>
        <button onClick={() => this.toggleHandler()}>
          Set toggle (Currently {toggle ? "True" : "False"})
        </button>
      </div>
    );
  }
}

export default PureCounterComponent;
