// importing the necessary modules from react and react router
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
// importing App Context and mockData
import { AppContext } from "../context/AppContext";
import { routes } from "../context/mockData";

// available routes function component
// this component displays a list of available routes and provides options to select a route or view its details.
export default function AvailableRoutes() {
  // accessing addRouteToCart function from AppContext
  const { addRouteToCart } = useContext(AppContext);

  //returning the components (pretty self-explanitory)
  return (
    <div>
      <h2 className="h1-tag">Available Routes</h2>
      <div className="available-routes">
        {/* mapping through the routes array to display each route item*/}
        {routes.map((route) => (
          <div className="route-item" key={route.id}>
            <h3>{route.title}</h3>
            <p>{route.description}</p>
            {/* button to select route */}
            <button onClick={() => addRouteToCart(route.id)}>
              Select Route
            </button>
            {/* link to view route details */}
            <Link to={`/route/${route.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
