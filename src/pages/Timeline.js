import React, { Component } from "react";
import twitterLogo from "../twitter.png";
import "./Timeline.css";

export default class Timeline extends Component {
  state = {
    newTweet: ""
  };

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value });
  };

  handleNewTweet = e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@goTwitter:username");

    console.log(content, author);
  };

  render() {
    return (
      <div className="timeline-wrapper">
        <img src={twitterLogo} alt="Twitter Clone" height={45} />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          ></textarea>
        </form>
      </div>
    );
  }
}
