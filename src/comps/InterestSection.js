// InterestSection
import React from "react";

const InterestSection = ({
  handleInterestChange,
  interests,
  onSubmit,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="Interests onboarding">
      <div className="Interests-title">
        <button onClick={onPrevClick} className="Onboarding-back"></button>
        <h1>Interesses</h1>

        <p>
          Selecteer alle onderwerpen die jij interessant vind, om zo jou
          persoonlijke feed te creeëren.
        </p>
        <form className="InterestsForm">
          <input
            type="checkbox"
            id="Kunst"
            name="interest"
            value="Musea"
            onChange={(e) => handleInterestChange(e, "Kunst")}
          />
          <label htmlFor="Kunst">Kunst</label>

          <input
            type="checkbox"
            id="Theater"
            name="interest"
            value="Theater"
            onChange={(e) => handleInterestChange(e, "Theater")}
          />
          <label htmlFor="Theater">Theater</label>

          <input
            type="checkbox"
            id="Muziek"
            name="interest"
            value="Muziek"
            onChange={(e) => handleInterestChange(e, "Muziek")}
          />
          <label htmlFor="Muziek">Muziek</label>

          <input
            type="checkbox"
            id="Film"
            name="interest"
            value="Film"
            onChange={(e) => handleInterestChange(e, "Film")}
          />
          <label htmlFor="Film">Film</label>

          <input
            type="checkbox"
            id="Design"
            name="interest"
            value="Design"
            onChange={(e) => handleInterestChange(e, "Design")}
          />
          <label htmlFor="Design">Design</label>

          <input
            type="checkbox"
            id="Games"
            name="interest"
            value="Games"
            onChange={(e) => handleInterestChange(e, "Games")}
          />
          <label htmlFor="Games">Games</label>

          <input
            type="checkbox"
            id="Reizen"
            name="interest"
            value="Reizen"
            onChange={(e) => handleInterestChange(e, "Reizen")}
          />
          <label htmlFor="Reizen">Reizen</label>

          <input
            type="checkbox"
            id="Sport"
            name="interest"
            value="Sport"
            onChange={(e) => handleInterestChange(e, "Sport")}
          />
          <label htmlFor="Sport">Sport</label>
        </form>
        <button onClick={onNextClick} className="onboarding-start">
          Volgende stap
        </button>
      </div>
    </div>
  );
};

export default InterestSection;
