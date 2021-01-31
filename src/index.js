import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <div className="main">
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
