import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

function Events() {
  const [events, setEvents] = useState([]);
  const colRef = collection(db, 'events');
  
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
        {" "}
        
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