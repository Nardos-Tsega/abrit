import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="yellow-border" />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
