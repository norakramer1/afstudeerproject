import React from "react";
import SocialMediaModal from "./Modal";
import { useState } from "react";

const AddFriendsSection = ({ onPrevClick, onNextClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (socialMedia) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="add-friends">
      <button onClick={onPrevClick} className="Onboarding-back"></button>
      <h1>Voeg je vrienden toe</h1>
      <p>Importeer een lijst met jou vrienden vanuit deze apps.</p>
      <ul className="socialmedia-apps">
        <li className="socialmedia-app">
          <button
            className="socialmedia-button facebook"
            onClick={() => openModal("Facebook")}
          ></button>
          {/* <p>Facebook</p> */}
        </li>

        <li className="socialmedia-app">
          <button
            className="socialmedia-button instagram"
            onClick={() => openModal("Instagram")}
          ></button>
          {/* <p>Instagram</p> */}
        </li>

        <li className="socialmedia-app">
          <button
            className="socialmedia-button contacts"
            onClick={() => openModal("Contacts")}
          ></button>
          {/* <p>Contacten</p> */}
        </li>
      </ul>

      {/* Single Modal */}
      <SocialMediaModal isOpen={modalOpen} closeModal={closeModal} />
      <button onClick={onNextClick} className="onboarding-start">
        Volgende stap
      </button>
    </div>
  );
};

export default AddFriendsSection;
