// WelcomeSection.js

import React from "react";
import logo from "../icons/event-guide-logo.svg";

const WelcomeSection = ({ onStartOnboarding }) => {
  return (
    <div className="Intro onboarding">
      <img src={logo} alt="logo" />
      <p className="Intro-text">
        Ontdek culturele evenementen die bij jou passen, bekijk wat jou vrienden
        leuk vinden en laat ze weten waar jij geweest bent.
      </p>
      <button className="onboarding-start" onClick={onStartOnboarding}>
        Start
      </button>
    </div>
  );
};

export default WelcomeSection;
