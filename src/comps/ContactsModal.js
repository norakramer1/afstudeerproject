// SocialMediaModal.js
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import ShareButton from "./ShareButton";

const ContactsModal = ({ isOpen, closeModal }) => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const buttonText = isButtonClicked ? "Gekopieerd" : "Kopieër";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={`Modal for`}
    >
      <div>
        <button className="Modal-back" onClick={closeModal}></button>

        <h2>Nodig je vrienden uit</h2>
        <p>Kopieër dit bericht om dit te delen</p>

        <ShareButton />
        <button className="onboarding-start" onClick={closeModal}>
          Klaar
        </button>
      </div>
    </Modal>
  );
};

export default ContactsModal;
