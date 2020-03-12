import React, { Component } from "react";

import twitterLogo from "../twitter.png";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@goTwitter:username", username);

    this.props.history.push("/timeline");
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="login-wrapper">
          <img src={twitterLogo} alt="Twitter Clone" />
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.username}
              placeholder="Nome de usuário"
              onChange={this.handleInputChange}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}
