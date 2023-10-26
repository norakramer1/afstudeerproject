import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Events = () => {
    const { docs } = useFirestore('events');
    console.log(docs);
    return (
        <div className="events">
        <h1>Events</h1>
        <p>Events are coming soon.</p>
        </div>
    )
    }

export default Events;