// WelcomeSection.js

import React from "react";

const WelcomeSection = ({ onStartOnboarding }) => {
  return (
    <div className="Intro onboarding">
      <h1>Welkom</h1>
      <p>Ontdek de wereld van kunst en cultuur.</p>
      <button className="onboarding-start" onClick={onStartOnboarding}>
        Start
      </button>
    </div>
  );
};

export default WelcomeSection;
