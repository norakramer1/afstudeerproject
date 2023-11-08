import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Events() {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const colRef = collection(db, 'events');
  const userRef = collection(db, 'users');

  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('users:', users, 'events:', events)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
   // const uid = user.uid;
    // ...
 } else {
    // User is signed out
    // ...
  }
});

useEffect(() => {
  const getUsers = async () => {
    const userData = await getDocs(userRef);
    setUsers(userData.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
  };
getUsers();
}, []);

  
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
        {/* {" "} */}
        
        <h1>Title: {event.eventName}</h1>
        <p>Description: {event.eventDescription}</p>
        {event.eventTitleImage && <img src={event.eventTitleImage} alt="event" />}
        </li>
 
        );
     })}
         </ul> 
  </div>
);
}
export default Events;