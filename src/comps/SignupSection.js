// SignupSection.js
import React from "react";
import { Link } from "react-router-dom";

const SignupSection = ({
  onSubmit,
  handleInterestChange,
  email,
  setEmail,
  password,
  setPassword,
  error,
  onNextClick,
}) => {
  return (
    <div className="Signup-title onboarding">
      <h1>Maak een account</h1>
      <p>
        Heb je al een account? <Link to="/login">Login</Link>
      </p>

      <button onClick={onNextClick} className="onboarding-start">
        Next
      </button>

      <button className="onboarding-start">Start</button>

      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="Signup-form">
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" placeholder="Username" />
            {/* <label htmlFor="email">Email</label> */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            {/* <label htmlFor="password">Password</label> */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupSection;
