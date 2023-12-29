import React from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./comps/Events";
import Login from "./comps/Login";
import Signup from "./comps/Signup";
import Account from "./comps/Account";
import EventDetail from "./comps/EventDetail"; // Import the new component
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./comps/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          {/* Add a new route for individual event detail page */}
          <Route path="/events/:eventId" element={<EventDetail />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
