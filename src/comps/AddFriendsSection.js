import React from "react";
import SocialMediaModal from "./Modal";
import ContactsModal from "./ContactsModal";
import { useState } from "react";

const AddFriendsSection = ({ onPrevClick, onNextClick }) => {
  const [modalType, setModalType] = useState(null);

  const openModal = (socialMedia) => {
    setModalType(socialMedia);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const renderModal = () => {
    switch (modalType) {
      case "Facebook":
      case "Instagram":
        return (
          <SocialMediaModal isOpen={!!modalType} closeModal={closeModal} />
        );
      case "Contacts":
        return <ContactsModal isOpen={!!modalType} closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className="Add-friends onboarding">
      <button onClick={onPrevClick} className="Onboarding-back"></button>
      <h1>Voeg je vrienden toe</h1>
      <p>
        Importeer een lijst met jou vrienden vanuit deze apps, of nodig jou
        vrienden uit.
      </p>
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

      {renderModal()}

      {/* Single Modal */}
      {/* <SocialMediaModal isOpen={modalOpen} closeModal={closeModal} /> */}
      <button onClick={onNextClick} className="onboarding-start">
        Volgende stap
      </button>
    </div>
  );
};

export default AddFriendsSection;
