import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="Login">
      <image
        src="https://firebasestorage.googleapis.com/v0/b/cmd-culture-app.appspot.com/o/event-guide-logo.svg?alt=media&token=e97eb440-a07b-45d6-b5b2-c7199dae3664"
        alt="logo"
      />
      <div className="Intro-text">
        <h1>Login</h1>
        <p>Login to your account</p>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button type="submit" className="Submit">
            Inloggen
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
