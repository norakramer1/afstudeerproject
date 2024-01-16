import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from "../icons/event-guide-logo.svg";
import avatar from "../icons/friends/friend1.png";

function Events({ friendImages }) {
  //const matchingEvents = [];
  const [matchingEvents, setMatchingEvents] = useState([]);
  const colRef = collection(db, "events");
  const userRef = collection(db, "users");
  const auth = getAuth();

  // Function to generate random dummy text
  // Function to generate random dummy review
  const DummyReviews = (friendImages) => {
    const dummyReviews = [
      "Mia is naar dit evenement geweest en vond het geweldig",
      "Noah is naar dit evenement geweest",
      "Emma is naar dit evenement geweest",
      "Olivia is naar dit evenement geweest",
      "Ava is naar dit evenement geweest",
      "NRC: 'Een van de beste voorstellingen van het jaar'",
      "CJP: 'Een aanrader!'",
      "Theatervereniging Nederland: 'Geweldig!'",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
      "Op basis van jouw interesses",
    ];

    const randomIndex = Math.floor(Math.random() * dummyReviews.length);
    const randomFriendImage =
      friendImages[Math.floor(Math.random() * friendImages.length)];

    const review = dummyReviews[randomIndex];
    let friendImage;

    if (review.includes("is naar dit evenement geweest en vond het geweldig")) {
      // Show friendImage1.png to friendImage5.png
      friendImage = friendImages[Math.floor(Math.random() * 9)];
    } else if (review.includes("Op basis van jouw interesses")) {
      // Show friendImage1.png
      friendImage = friendImages[13];
    } else if (review.includes(":")) {
      // Show friendImage8.png
      friendImage = friendImages[12];
    } else {
      // For other cases, use a random friend image
      friendImage = randomFriendImage;
    }

    return { review, friendImage };
  };

  useEffect(() => {
    // Set up the listener only once when the component mounts
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const data = await getDocs(colRef);
          const events = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log(events);
          //Additional logic for user-specific filtering if needed
          const snapshot = await getDoc(doc(userRef, user.uid));
          const userInterests = snapshot.data().interests;

          console.log(userInterests);
          const matchingEvents = () => {
            return events.filter(
              (item) =>
                item.interest &&
                userInterests.some((interest) =>
                  item.interest.includes(interest)
                )
            );
          };
          console.log(matchingEvents());
          setMatchingEvents(matchingEvents);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      } else {
        // User is signed out
      }
    });

    // Unsubscribe
    return () => {
      console.log("unsubscribed");
      unsubscribe();
    };
  }, []);

  return (
    <div className="Events">
      <nav className="Nav">
        <img src={logo} alt="logo" className="Nav-logo" />
        <Link to="/account" className="Nav-account-link">
          <button className="Nav-button">Account</button>
          <img src={avatar} alt="" className="Nav-avatar" />
        </Link>
      </nav>
      <h1 className="Events-title">Events</h1>
      <ul className="AllEvents">
        {matchingEvents &&
          matchingEvents.map((event) => {
            const { review, friendImage } = DummyReviews(friendImages);
            return (
              <li key={event.id} className="Event">
                <div className="EventCategories">
                  {event.interest &&
                    event.interest.map((interest, index) => (
                      <p key={index} className={`EventCategory ${interest}`}>
                        {interest}
                      </p>
                    ))}
                </div>
                <div className="EventImages">
                  {event.eventTitleImage &&
                    event.eventTitleImage.map((eventTitleImage, index) => (
                      <img
                        key={index}
                        src={eventTitleImage}
                        alt={event.title}
                        className="EventImage"
                        loading="lazy"
                      />
                    ))}
                </div>

                <div className="EventDetails">
                  <div className="EventReviews">
                    <img
                      src={friendImage}
                      alt="Friend"
                      className="FriendImage"
                    />
                    <p className="EventReview">{review}</p>
                  </div>

                  <div className="EventInfo">
                    <h2 className="EventInfo-title">{event.title}</h2>
                    <p className="EventInfo-date">{event.date}</p>
                    <p className="EventInfo-location">{event.location}</p>

                    <div className="EventInfo-links">
                      <Link to={`/events/${event.id}`}>Meer informatie</Link>
                      <Link to="https://www.ticketmaster.nl/" target="_blank">
                        Tickets
                      </Link>
                    </div>

                    {/* <p className="EventInfo-description">{event.description}</p> */}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Events;
