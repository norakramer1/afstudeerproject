import React from "react";

const PickFriendsSection = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="title">
      <button onClick={onPrevClick} className="Onboarding-back"></button>

      <button onClick={onNextClick} className="onboarding-start">
        Volgende stap
      </button>
    </div>
  );
};

export default PickFriendsSection;
