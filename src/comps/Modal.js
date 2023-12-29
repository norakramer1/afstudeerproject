// SocialMediaModal.js
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import friendImgs from "../icons/friend-gradient.png";

const SocialMediaModal = ({ isOpen, closeModal }) => {
  const [selectedFriends, setSelectedFriends] = useState([]);

  //   const handleFriendClick = (friend) => {
  //     if (selectedFriends.includes(friend)) {
  //       setSelectedFriends(
  //         selectedFriends.filter((selected) => selected !== friend)
  //       );
  //     } else {
  //       setSelectedFriends([...selectedFriends, friend]);
  //     }
  //   };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={`Modal for`}
    >
      <div>
        <button onClick={closeModal}>Close Modal</button>
        {/* <h1>Voeg jou vrienden toe</h1>
        <p>Kies jou vrienden uit deze lijst voor de beste ervaring in de app</p> */}

        <ul className="friends">
          <li className="friend">
            <img src={friendImgs} alt="friend1" />
            <div className="friend-info">
              <h3>Sarah</h3>

              <input
                type="checkbox"
                id="friend1"
                name="friend1"
                value="friend1"
                // checked={selectedFriends.includes("friend1")}
                // onChange={() => handleFriendClick("friend1")}
              />
              <label htmlFor="friend1"></label>
            </div>
          </li>

          <li className="friend">
            <img src={friendImgs} alt="friend1" />
            <div className="friend-info">
              <h3>friend1</h3>

              <input
                type="checkbox"
                id="friend1"
                name="friend1"
                value="friend1"
                // checked={selectedFriends.includes("friend1")}
                // onChange={() => handleFriendClick("friend1")}
              />
              <label htmlFor="friend2"></label>
            </div>
          </li>

          <li className="friend">
            <img src={friendImgs} alt="friend1" />
            <div className="friend-info">
              <h3>friend1</h3>
              <input
                type="checkbox"
                id="friend1"
                name="friend1"
                value="friend1"
                // checked={selectedFriends.includes("friend1")}
                // onChange={() => handleFriendClick("friend1")}
              />
              <label htmlFor="friend3"></label>
            </div>
          </li>

          <li className="friend">
            <img src={friendImgs} alt="friend1" />
            <div className="friend-info">
              <h3>friend1</h3>
              <input
                type="checkbox"
                id="friend1"
                name="friend1"
                value="friend1"
                // checked={selectedFriends.includes("friend1")}
                // onChange={() => handleFriendClick("friend1")}
              />
              <label htmlFor="friend4"></label>
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default SocialMediaModal;
