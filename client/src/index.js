import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById("root"));
}