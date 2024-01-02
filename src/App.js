import React from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./comps/Events";
import Login from "./comps/Login";
import Signup from "./comps/Signup";
import Account from "./comps/Account";
import EventDetail from "./comps/EventDetail"; // Import the new component
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./comps/ProtectedRoute";
import friend1 from "./icons/friends/friend1.png";
import friend2 from "./icons/friends/friend2.png";
import friend3 from "./icons/friends/friend3.png";
import friend4 from "./icons/friends/friend4.png";
import friend5 from "./icons/friends/friend5.png";
import friend6 from "./icons/friends/friend6.png";
import friend7 from "./icons/friends/friend7.png";
import friend8 from "./icons/friends/friend8.png";
import friend9 from "./icons/friends/friend9.png";
import friend10 from "./icons/friends/friend10.png";
import friend11 from "./icons/friends/friend11.png";
import friend12 from "./icons/friends/friend12.png";

function App() {
  const friendNames = [
    "Mia",
    "Noah",
    "Emma",
    "Olivia",
    "William",
    "Ava",
    "Sophia",
    "Isabella",
    "James",
    "Charlotte",
    "Benjamin",
    "Amelia",
  ];
  const friendImages = [
    friend1,
    friend2,
    friend3,
    friend4,
    friend5,
    friend6,
    friend7,
    friend8,
    friend9,
    friend10,
    friend11,
    friend12,
  ];
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
          <Route
            path="/signup"
            element={
              <Signup friendNames={friendNames} friendImages={friendImages} />
            }
          />
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
          <Route
            path="/events/:eventId"
            element={
              <EventDetail
                friendNames={friendNames}
                friendImages={friendImages}
              />
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
