
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

  function Events() {
   const matchingEvents = [];
//   const [matchingEvents, setMatchingEvents] = useState([]);
//   const colRef = collection(db, 'events');
//   const userRef = collection(db, 'users');
//   const auth = getAuth();

//   useEffect(() => {
//     // Set up the listener only once when the component mounts
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         try {
//           const data = await getDocs(colRef);
//           const events = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// console.log(events);
//           // Additional logic for user-specific filtering if needed
//           // const snapshot = await getDoc(doc(userRef, user.uid));
//           // const userInterests = snapshot.data().interests;
//           // const matchingEvents = events.filter((event) =>
//           //   event.interest.some((eventInterest) =>
//           //     userInterests.includes(eventInterest)
//           //   )
//           // );

//           setMatchingEvents(events);
//         } catch (error) {
//           console.error('Error fetching events:', error);
//         }
//       } else {
//         // User is signed out
//       }
//     });

//     // Unsubscribe when the component is unmounted
//     return () => {
//       console.log('unsubscribed');
//       unsubscribe();
      
//     };
//   }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="Events">
      <ul>
        {matchingEvents.map((event) => {
          return (
            <li key={event.id}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>Locatie: {event.location}</p>
              <p>Organisator: {event.organizer}</p>
              {event.eventTitleImage && <img src={event.eventTitleImage} alt="event" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Events;

