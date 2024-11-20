// importing the necessary modules from react and react router
import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext"; //importing AppContext from AppContext.js to access shared state and functions
import { routes } from "../context/mockData"; //importing information from mockData.js to utilise
import { useState } from "react"; //importing useState from react to manage local component state

//ticket purchase function to handle the ticket purchase and its functionality
export default function TicketPurchase() {
  // accessing selectedRoutes, removeRouteFromCart, error, and setError from app context
  const { selectedRoutes, removeRouteFromCart, error, setError } =
    useContext(AppContext);
  const navigate = useNavigate(); // navigate to different routes
  const [quantities, setQuantities] = useState({}); // state to manage ticket quantities

  //handles the removal of the route from the cart
  const handleRemoveRoute = (routeId) => {
    //call removeRouteFromCart function to remove the route from the cart
    removeRouteFromCart(routeId);
    //clear any existing error messages
    setError(null);
    //update quantities state to remove the route's quantity
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[routeId];
    setQuantities(updatedQuantities);
  };

  //handles the checkout function
  const handleCheckout = () => {
    //check if any tickets are selected for purchase
    if (selectedRoutes.length > 0) {
      //iterate through selected routes to remove them from the cart
      selectedRoutes.forEach((routeId) => {
        removeRouteFromCart(routeId);
        //update quantities state to remove the route's quantity
        const updatedQuantities = { ...quantities };
        delete updatedQuantities[routeId];
        setQuantities(updatedQuantities);
      });
      //clear any existing error messages
      setError(null);
      //navigate to the confirmation page after checkout
      navigate("/confirmation");
    } else {
      //display an error message if no tickets are selected for purchase
      setError("No tickets selected for purchase.");
    }
  };

  //this function calculates the total amount of the routes selected
  //this included if the user changed the quantity of the route they wanted
  const getTotalAmountDue = () => {
    return selectedRoutes.reduce((total, routeId) => {
      //find the route details based on routeId
      const route = routes.find((route) => route.id === routeId);
      //get the quantity of the route
      const quantity = quantities[routeId] || 1;
      //calculate the total price for the route and quantity
      return total + route.price * quantity;
    }, 0);
  };

  //handle quantity change for a specific route
  const handleQuantityChange = (routeId, value) => {
    //update quantities state with the new quantity value for the specific route
    setQuantities({
      ...quantities,
      [routeId]: parseInt(value, 10),
    });
  };

  //renders the ticket purchase component
  return (
    <div>
      <h2 className="h1-tag">Ticket Purchase</h2>
      {/* display error message if any */}
      {error && <p>{error}</p>}
      {/* check if no tickets are selected */}
      {selectedRoutes.length === 0 ? (
        <p className="p-ticket">No tickets selected for purchase.</p>
      ) : (
        <div>
          <ul className="ticket-container">
            {/* this renders selected tickets */}
            {selectedRoutes.map((routeId) => {
              const route = routes.find((r) => r.id === routeId);
              return (
                <div>
                  <div className="ticket-item" key={routeId}>
                    <h3>{route.title}</h3>
                    <p>{route.description}</p>
                    <p>Price: ${route.price}</p>
                    {/* input to change ticket quantity, for i was unaware of how to go about it, i used ai to help me as i wanted to add a quantity function  */}
                    <input
                      type="number"
                      min="1"
                      value={quantities[routeId] || 1}
                      onChange={(e) =>
                        handleQuantityChange(routeId, e.target.value)
                      }
                    />
                    <button onClick={() => handleRemoveRoute(routeId)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
          {/* Display total amount due */}
          <p className="total-amount">
            Total Amount due: ${getTotalAmountDue()}
          </p>
          {/* Navigation and checkout buttons */}
          <div className="actions">
            <Link to="/">Back</Link>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
