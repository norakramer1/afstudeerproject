import React from "react";
import { Link } from "react-router-dom";

function Review() {
  return (
    <div>
      <h1>Review</h1>

      <form>
        <label htmlFor="review">Review</label>
        <textarea id="review" name="review" rows="4" cols="50"></textarea>
        <Link to="/events" className="Nav-account-link">
          <button type="submit">Verstuur review</button>
        </Link>
      </form>
    </div>
  );
}

export default Review;
