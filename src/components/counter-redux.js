import React, { Component } from "react";
import store from "../store";

export default class Counter extends Component {
  componentDidMount() {
    // This will run on any update from the store.
    // This is *** NOT optimal at all. *** And there are better ways to do this method as well.
    // This should serve to show how store subscriptions work, though.
    // We'll learn, shortly, how connect() can optimize the performance of subscribing to a store
    // and smartly render our components.
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  increment = () => {
    store.dispatch({
      type: "INCREMENT"
    });
  };
  decrement = () => {
    store.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    const { counter } = store.getState();
    return (
      <div>
        <span className="counter">{counter}</span>
        <button className="button" onClick={this.increment}>
          +
        </button>
        <button className="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
