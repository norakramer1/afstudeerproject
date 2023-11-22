import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Events() {
  //const matchingEvents = [];
  const [matchingEvents, setMatchingEvents] = useState([]);
  const colRef = collection(db, "events");
  const userRef = collection(db, "users");
  const auth = getAuth();

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

    // Unsubscribe when the component is unmounted
    return () => {
      console.log("unsubscribed");
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="Events">
      <h1>Events voor jou</h1>
      <ul>
        {matchingEvents.map((event) => {
          return (
            <li key={event.id} className="Event">
              <div className="EventCategories">
                {event.interest &&
                  event.interest.map((interest, index) => (
                    <p className="EventCategory">{interest}</p>
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
                    />
                  ))}
              </div>
              <div className="EventInfo">
                <h2 className="EventInfo-title">{event.title}</h2>
                <p className="EventInfo-date">{event.date}</p>
                <p className="EventInfo-location">{event.location}</p>

                <div className="EventInfo-links">
                  <a href="https://www.google.com" className="EventInfo-link">
                    Kaarten
                  </a>
                  <div className="EventInfo-friends">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/cmd-culture-app.appspot.com/o/friends.svg?alt=media&token=11f63f3a-cc68-447e-ad90-7fe5b52ea97d"
                      alt="friends"
                      className="EventInfo-friendsImg"
                    />
                    <p className="EventInfo-friend"> +20 vrienden gaan</p>
                  </div>
                </div>
                {/* <p className="EventInfo-description">{event.description}</p> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Events;
