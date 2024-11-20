// importing the necessary modules from react and react router
import React from "react";
import { Link } from "react-router-dom";

//confirmation page function component
export default function Confirmation() {
  //all the informationed returned is pretty self explainitory
  return (
    <div className="confirmation">
      <h2 className="h1-tag">Confirmation</h2>
      <p>Tickets purchased successfully!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
