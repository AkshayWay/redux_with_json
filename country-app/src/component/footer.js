import React, { component, Component } from "react";
import AppCSS from "../App.css";

export default function footer() {
  return (
    <div className="bgColor footer">
      <footer>
        <small>&copy;{new Date().getFullYear()} All rights reserved</small>
      </footer>
    </div>
  );
}
