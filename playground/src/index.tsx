import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SlateStrinDeserialize from "./SlateStringDeserialize";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SlateStrinDeserialize value="hello world" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
