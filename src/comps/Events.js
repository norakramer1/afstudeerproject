import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Events() {
  const [events, setEvents] = useState([]);
  const [userInterests, setUserInterests] = useState([]);
  const [matches, setMatches] = useState([]); 
  const colRef = collection(db, 'events');
  const userRef = collection(db, 'users');


  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {

    if (user) {
      const snapshot = await getDoc(doc(userRef, user.uid))
      const userInterests = snapshot.data().interests;
      
       const matches = [];

      // console.log('allEvents', events, 'userInterests', userInterests)
 
      // Filter and find matches
      const matchingEvents = events.filter(event =>
        event.interest.some(eventInterest =>
           userInterests.includes(eventInterest)
          // matches.push(event)
        )
      );


      setMatches(matchingEvents);
      
       // console.log('FIN:', matchingEvents);// Update the matches state with the matching events
    

    } else {
      // User is signed out
    }
  });


  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(colRef);
      setEvents(data.docs.map((doc) => ({...doc.data(), id: doc.id})));  
    };
    getEvents();
  }, []);
 
  return (
    <div className="Events">
      <ul>
        {events.map((event) => {
          return (
            <li key={event.id}>
              <h1>Title: {event.eventName}</h1>
              <p>Description: {event.eventDescription}</p>
              {event.eventTitleImage && <img src={event.eventTitleImage} alt="event" />}
            </li>
          );
        })}
      </ul>
      {/* You can now use the userInterests state to access the logged-in user's interests */}
      <div>
        <h2>User Interests:</h2>
        <ul>
          {userInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;
