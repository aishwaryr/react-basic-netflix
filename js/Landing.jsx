// @flow

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Landing extends Component {
  state = {
    searchInput: "",
    redirect: false
  };
  handleSearchInput = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchInput: event.target.value });
  };
  handleSearchInputSubmit = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    if (event.key === "Enter") {
      // console.log(this.state.searchInput);
      this.setState({ redirect: true });
    }
  };
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/search/${this.state.searchInput}`} />;
    }
    return (
      <div className="landing">
        <h1>ChillFlix</h1>
        <input
          onChange={this.handleSearchInput}
          onKeyPress={this.handleSearchInputSubmit}
          value={this.state.searchInput}
          type="text"
          placeholder="Search"
        />
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

export default Landing;
