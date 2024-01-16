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

        <h2 className="Review-subtitle">Geef dit evenement een rating</h2>
        <div class="Review-stars">
          <div class="star-checkbox">
            <input type="checkbox" id="star-1" name="star-1" value="star-1" />
            <label class="star-label" htmlFor="star-1"></label>
          </div>

          <div class="star-checkbox">
            <input type="checkbox" id="star-2" name="star-2" value="star-2" />
            <label class="star-label" htmlFor="star-2"></label>
          </div>

          <div class="star-checkbox">
            <input type="checkbox" id="star-3" name="star-3" value="star-3" />
            <label class="star-label" htmlFor="star-3"></label>
          </div>

          <div class="star-checkbox">
            <input type="checkbox" id="star-4" name="star-4" value="star-4" />
            <label class="star-label" htmlFor="star-4"></label>
          </div>

          <div class="star-checkbox">
            <input type="checkbox" id="star-5" name="star-5" value="star-5" />
            <label class="star-label" htmlFor="star-5"></label>
          </div>
        </div>

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
