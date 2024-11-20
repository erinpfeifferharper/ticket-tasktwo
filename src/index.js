// importing the necessary modules from react and react router
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //importing the styling to be applied everywhere
import App from "./App"; //importing the app component

const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering the app component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
