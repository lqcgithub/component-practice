import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "Cuong" };
  }

  render() {
    return (
      // Navbar.js
      <nav id="navbar">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
        </ul>

        <div className="nav-details">
          <p className="nav-username"> {this.state.username} </p>
        </div>
      </nav>
    );
  }
}
