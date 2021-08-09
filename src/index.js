import React from "react";
import ReactDOM from "react-dom";
import state from "./store/index";
import "./index.css";
import App from "./App";

ReactDOM.render(<App state={state} />, document.getElementById("root"));
