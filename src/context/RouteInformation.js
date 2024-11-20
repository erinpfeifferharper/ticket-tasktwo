// importing the necessary modules from react and react router
import React from "react";
import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// importing AppContext and mockData
import { AppContext } from "./AppContext";
import { routes } from "./mockData";

// route information component
// this component displays detailed information about a selected route
export default function RouteInformation() {
  const { id } = useParams();
  const { addRouteToCart } = useContext(AppContext);

  //initializing the navigate function using the useNavigate hook to programmatically navigate between routes
  //this function was one i did not know of or know how to use, therefore using an external piece of code for this
  const navigate = useNavigate();

  const route = routes.find((route) => route.id === id);

  //a function that handles the purchse of a ticket for the route
  const handlePurchase = (routeId) => {
    //adds the selected route to cart
    addRouteToCart(routeId);
    // this takes you to the page where you can make your purchase
    navigate("/ticket-purchase");
  };

  //returning the route information (some of which again is pretty self explainitory, i'll explain ones that need explaining)
  //this is where the route detail information is (this is what we get after we click view details from available route pages)
  return (
    <div>
      <h2 className="h1-tag">Route Details</h2>
      <div className="route-info">
        <h3>{route.title}</h3>
        <p className="p-description">{route.description}</p>
        <p>Duration: {route.duration}</p>
        <p>Number of Stops: {route.stops}</p>
        <p>Price: ${route.price}</p>
        {/* the button to purchase your ticket */}
        <button onClick={() => handlePurchase(route.id)}>
          Purchase Ticket
        </button>
        {/* link that takes you back to the previous page being available routes */}
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
