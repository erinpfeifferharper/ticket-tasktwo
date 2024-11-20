// importing the necessary modules from react and react router
import React from "react";
import { Link } from "react-router-dom";

//navbar function
//this is the navigation bar that will allow us to interchange between the available routes and ticket purchases
export default function Navbar() {
  return (
    <header className="header">
      {/* main page heading */}
      <h1 className="h1-tag">Transit Routes</h1>
      {/* navigation links for the two pages - name of pages are seen below*/}
      <nav className="navbar">
        <Link to="/">Available Routes</Link>
        <Link to="/ticket-purchase">Ticket Purchase</Link>
      </nav>
    </header>
  );
}
