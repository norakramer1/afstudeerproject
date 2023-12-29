// SocialMediaModal.js
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import friend1 from "../icons/friends/friend1.png";
import friend2 from "../icons/friends/friend2.png";
import friend3 from "../icons/friends/friend3.png";
import friend4 from "../icons/friends/friend4.png";
import friend5 from "../icons/friends/friend5.png";
import friend6 from "../icons/friends/friend6.png";
import friend7 from "../icons/friends/friend7.png";
import friend8 from "../icons/friends/friend8.png";
import friend9 from "../icons/friends/friend9.png";
import friend10 from "../icons/friends/friend10.png";
import friend11 from "../icons/friends/friend11.png";
import friend12 from "../icons/friends/friend12.png";

// ... import other friend images ...

const friendImgs = [
  friend1,
  friend2,
  friend3,
  friend4,
  friend5,
  friend6,
  friend7,
  friend8,
  friend9,
  friend10,
  friend11,
  friend12,
];

const friendNames = [
  "Mia",
  "Noah",
  "Emma",
  "Olivia",
  "William",
  "Ava",
  "Sophia",
  "Isabella",
  "James",
  "Charlotte",
  "Benjamin",
  "Amelia",
];

const SocialMediaModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={`Modal for`}
    >
      <div>
        <button className="Modal-back" onClick={closeModal}></button>

        <h2>Welke vrienden wil je volgen?</h2>
        <p>Volg je vrienden door op toevoegen te klikken</p>
        <ul className="friends">
          {friendImgs.map((friendImg, index) => (
            <li className="friend" key={`friend${index + 1}`}>
              <img src={friendImg} alt={`friend${index + 1}`} />
              <div className="friend-info">
                <h3 className="friend-name">{friendNames[index]}</h3>
                <input
                  type="checkbox"
                  id={`friend${index + 1}`}
                  name={`friend${index + 1}`}
                  value={`friend${index + 1}`}
                />
                <label htmlFor={`friend${index + 1}`}></label>
              </div>
            </li>
          ))}
        </ul>
        <button className="onboarding-start" onClick={closeModal}>
          Klaar
        </button>
      </div>
    </Modal>
  );
};

export default SocialMediaModal;
