// SocialMediaModal.js
import React from "react";
import Modal from "react-modal";
import { useState } from "react";

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
        <p>Kopieër dit bericht om je vrienden uit te nodigen.</p>

        <form>
          <textarea
            className="Modal-textarea"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value="Hey! Ik ben net lid geworden van YourEventGuide, Doe je mee? https://www.youreventguide.com/invite/1234567890"
          ></textarea>
        </form>
        <button onClick={setButtonClicked} className="onboarding-start copy">
          {buttonText}
        </button>
        <button className="onboarding-start" onClick={closeModal}>
          Klaar
        </button>
      </div>
    </Modal>
  );
};

export default ContactsModal;
