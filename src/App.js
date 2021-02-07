import React from "react";
import {Component} from "react";// eslint-disable-line no-unused-vars
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  omponentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
