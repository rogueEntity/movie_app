import React from "react";
import {Component} from "react";// eslint-disable-line no-unused-vars

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
