import React from "react";

const AddFriendsSection = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="title">
      <button onClick={onPrevClick} className="Onboarding-back"></button>
      <h1>Voeg je vrienden toe</h1>
      <p>Importeer een lijst met jou vrienden vanuit deze apps.</p>
      <div className="socialmedia-apps">
        <button className="socialmedia-button facebook">Facebook</button>
        <button className="socialmedia-button instagram">Instagram</button>
        <button className="socialmedia-button contacts">Contacten</button>
      </div>
      <button onClick={onNextClick} className="onboarding-start">
        Volgende stap
      </button>
    </div>
  );
};

export default AddFriendsSection;
