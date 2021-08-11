import React, { component, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import AppCSS from "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/company_logo.png";
import $ from "jquery";

export default function navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bgColor"
      style={{
        marginBottom: "10px",
        borderRadius: "0px 0px 10px 10px",
      }}
    >
      <a className="navbar-brand" href="/home">
        <img src={Logo} alt="Company_logo" className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ backgroundColor: "#76c7d5" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
