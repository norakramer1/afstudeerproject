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
  onPrevClick,
  error,
}) => {
  return (
    <div className="Signup onboarding">
      <div className="Signup-title">
        <button onClick={onPrevClick} className="Onboarding-back"></button>
        <h1>Maak een account</h1>
        <p>
          Heb je al een account? <Link to="/login">Login</Link>
        </p>
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

              <input type="password" placeholder="Password check" />
            </div>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={onSubmit} type="button" className="Submit">
            Maak een account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
