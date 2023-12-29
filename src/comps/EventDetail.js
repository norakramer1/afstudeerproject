// EventDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function EventDetail() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventDoc = doc(db, "events", eventId);
        const eventSnapshot = await getDoc(eventDoc);
        if (eventSnapshot.exists()) {
          setEventDetails({ id: eventSnapshot.id, ...eventSnapshot.data() });
        } else {
          // Handle case where event does not exist
          console.log("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!eventDetails) {
    // Loading state or handle event not found
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={eventDetails.eventTitleImage} alt={eventDetails.title} />
      <h2>{eventDetails.title}</h2>
      {/* Render other event details here */}
    </div>
  );
}

export default EventDetail;
