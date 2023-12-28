import React from "react";

const PickFriendsSection = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="title">
      <button onClick={onPrevClick} className="Onboarding-back"></button>
      <h1>Voeg jou vrienden toe</h1>
      <p>Kies jou vrienden uit deze lijst voor de beste ervaring in de app</p>
      <ul className="friends">
        <li>
          <input type="checkbox" id="friend1" name="friend1" value="friend1" />
          <label htmlFor="friend1">friend1</label>
          <image src="https://picsum.photos/200/300" alt="friend1" />
          <h3>friend1</h3>
        </li>
        <li>
          <input type="checkbox" id="friend2" name="friend2" value="friend2" />
          <label htmlFor="friend2">friend2</label>
          <image src="https://picsum.photos/200/300" alt="friend2" />
          <h3>friend2</h3>
        </li>
        <li>
          <input type="checkbox" id="friend3" name="friend3" value="friend3" />
          <label htmlFor="friend3">friend3</label>
          <image src="https://picsum.photos/200/300" alt="friend3" />
          <h3>friend3</h3>
        </li>
      </ul>
      <button onClick={onNextClick} className="onboarding-start">
        Volgende stap
      </button>
    </div>
  );
};

export default PickFriendsSection;
