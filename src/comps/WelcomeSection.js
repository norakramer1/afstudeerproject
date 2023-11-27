// WelcomeSection.js

import React from "react";

const WelcomeSection = ({ onStartOnboarding }) => {
  return (
    <div className="Intro onboarding">
      <h1>YourEventGuide</h1>
      <p>Ontdek culturele evenementen die bij jou passen</p>
      <button className="onboarding-start" onClick={onStartOnboarding}>
        Start
      </button>
    </div>
  );
};

export default WelcomeSection;
