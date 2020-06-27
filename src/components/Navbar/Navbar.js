import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a className="active" href="/">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
