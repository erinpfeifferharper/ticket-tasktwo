// importing the necessary modules from react and react router
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing information from the pages and context folders
import AppProvider from "./context/AppContext";
import Navbar from "./context/Navbar";
import AvailableRoutes from "./pages/AvailableRoutes";
import RouteInformation from "./context/RouteInformation";
import TicketPurchase from "./pages/TicketPurchase";
import Confirmation from "./pages/Confirmation";

// the app component function
// this is the main component that sets up the routing and provides the AppContext to child components.
export default function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AvailableRoutes />} />
          <Route path="/route/:id" element={<RouteInformation />} />
          <Route path="/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
