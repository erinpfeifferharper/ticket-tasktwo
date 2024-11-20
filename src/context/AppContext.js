// importing the necessary modules from react and react router
import React from "react";
import { createContext, useState } from "react";

//create new context for app
//this then shares state and functions across components, making it accessible throughout the application by exporting it
//this was sourced from ai tool to help me understand, and create what i wanted to
export const AppContext = createContext();

//defining the app provider component that manages shared state
//the "children" prop allows the component to wrap and render nested content
export default function AppProvider({ children }) {
  // initialize state for selected routes in the cart
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  // initialize state for error messages
  const [error, setError] = useState(null);

  //function to add route to cart
  const addRouteToCart = (routeId) => {
    //checks if route is not already in the cart
    if (!selectedRoutes.includes(routeId)) {
      //add the route to the cart
      setSelectedRoutes((prevRoutes) => [...prevRoutes, routeId]);
      //therefore clearing any error messages
      setError(null);
    } else {
      //display this error message if the route has already been added to the cart
      setError(<p className="p-ticket">Route already added to cart</p>);
    }
  };

  //this function removes routes from the cart
  const removeRouteFromCart = (routeId) => {
    //filter out the route to be removed from the cart
    setSelectedRoutes((prevRoutes) =>
      prevRoutes.filter((id) => id !== routeId)
    );
    //clear any previous error messages
    setError(null);
  };

  //this will return the rendered App Context
  return (
    <AppContext.Provider
      value={{
        selectedRoutes, //array of selected route id's in the cart
        addRouteToCart, //function to add route to cart
        removeRouteFromCart, //function to remove route from cart
        error, //current error message, if there are any
        setError, //this function sets the error messages
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
