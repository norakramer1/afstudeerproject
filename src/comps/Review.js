import React from "react";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div className="Review">
      <h1>Review dit evenement</h1>

      <form>
        <input type="text" placeholder="Naam" required />
        <textarea
          id="review"
          placeholder="Schrijf hier je review"
          className="Review-text"
          name="review"
          rows="4"
          cols="150"
          required
        ></textarea>
        <Link to="/" className="Nav-account-link">
          <button className="onboarding-start" type="submit">
            Verstuur review
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Review;
