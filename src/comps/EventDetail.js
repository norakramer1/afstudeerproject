// EventDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import mapImg from "../icons/map.png";

function EventDetail({ friendNames, friendImages }) {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const navigate = useNavigate();

  // Function to generate random dummy text
  const generateDummyText = () => {
    const dummyTexts = [
      "Verken de rijke diversiteit van culturele evenementen die jouw zintuigen prikkelen en verbeelding stimuleren. Van ontroerende theaterstukken en kunstexposities die de ziel beroeren tot adembenemende films die verhalen tot leven wekken. Ontdek de kracht van sport die gemeenschappen verbindt en de grenzeloze creativiteit van gaming en design die nieuwe werelden openen. De culturele scene nodigt je uit voor een avontuurlijke reis vol emotie, schoonheid en opwinding.",
      "Laat je meevoeren door de magie van de culturele bühne, waar theateracts als levende kunstwerken de nuances van menselijke emoties blootleggen. Ontdek de kronkelende paden van musea, waar elke expositie een uniek verhaal vertelt. Filmliefhebbers vinden een schat aan verhalen, van hartverwarmende drama's tot epische avonturen, op het witte doek. Sportevenementen brengen fanatieke energie en saamhorigheid, terwijl de digitale wereld van gaming en design grenzen vervaagt en de verbeelding laat floreren. Stap uit je comfortzone en laat cultuur in al haar facetten je zintuigen omarmen.",
      "Duik in een wereld van culturele evenementen die de grenzen van de verbeelding verleggen. Het podium van theater onthult de diepten van menselijke expressie, terwijl musea als tijdreisportalen dienen, waar kunst en geschiedenis hand in hand gaan. Film laat verhalen tot leven komen, een visuele symfonie van emoties en avonturen. Sport geeft een opwindende puls aan collectieve opwinding, en in de digitale sfeer van gaming en design ontstaan unieke universums. Ervaar cultuur als een rijke, veelzijdige beleving die je meeneemt op een reis vol verwondering en ontdekking.",
      "Ga op ontdekkingsreis in de wereld van culturele evenementen, waar elk moment een nieuwe ervaring onthult. Van meeslepende theaterstukken die de grenzen van emotie verkennen tot musea die een blik werpen op ons verleden en toekomst. Laat je betoveren door het witte doek met films die je meenemen naar verschillende werelden. Sportevenementen brengen de spanning van het veld naar het hart van de gemeenschap, terwijl gaming en design een speeltuin van creativiteit vormen. Cultuur wacht op je, klaar om je mee te nemen op een avontuur dat je horizon verbreedt",
      "Verbind je met cultuur op een dieper niveau en omarm de diversiteit van evenementen die de wereld van kunst, entertainment en menselijke expressie omvatten. Het theater onthult de kracht van live performance, musea dienen als poorten naar verleden en heden, terwijl film de magie van verhalen vertellen viert. Sportevenementen brengen gemeenschappen samen in gedeelde passie, terwijl gaming en design nieuwe vormen van creativiteit en interactie ontgrendelen. Maak verbinding met de rijkdom van cultuur en laat je inspireren door een wereld van mogelijkheden en ontdekkingen.",
    ];

    const randomIndex = Math.floor(Math.random() * dummyTexts.length);
    return dummyTexts[randomIndex];
  };

  const generateDummyReviews = () => {
    const dummyReviews = [
      "Ik móet je vertellen over dit evenement! Zo intens en meeslepend, echt heel gaaf. De acteurs namen me helemaal mee in het verhaal. Absoluut de moeite waard!",
      "Gisteravond was magisch in dat kunstmuseum. De exposities waren als een reis door de tijd en ruimte. Jij als kunstliefhebber zou dit geweldig vinden. Niet te missen!",
      "Net terug van een filmavond die je niet wilt missen! Die nieuwe release was zowel ontroerend als meeslepend. Perfect voor jou, gezien je liefde voor film met diepgaande verhalen.",
      "Dit was een totale sensatie! Zo veel nieuwe dingen gezien en geweldige interactieve ervaringen. Niet missen!",
      "Dat was verbluffend! Als liefhebber moet je hier volgende keer zeker bij zijn.",
      "Ik ging naar de indie muziekshow gisteren en dacht meteen aan jou. De vibes, de nieuwe geluiden - dit is helemaal jouw scene. Volgende keer gaan we samen!",
      "Dit was geweldig! Volgende keer ben jij zeker mijn +1. Jij zou dit ook fantastisch vinden.",
    ];

    const randomIndexReviews = Math.floor(Math.random() * dummyReviews.length);
    return dummyReviews[randomIndexReviews];
  };

  const generateDummyNames = () => {
    const dummyNames = friendNames;

    const randomIndexNames = Math.floor(Math.random() * dummyNames.length);
    return dummyNames[randomIndexNames];
  };

  const generateDummyImages = () => {
    const dummyImages = friendImages;

    const randomIndexImages = Math.floor(Math.random() * dummyImages.length);
    return dummyImages[randomIndexImages];
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventDoc = doc(db, "events", eventId);
        const eventSnapshot = await getDoc(eventDoc);
        if (eventSnapshot.exists()) {
          setEventDetails({ id: eventSnapshot.id, ...eventSnapshot.data() });
        } else {
          // if event does not exist
          console.log("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleNavigate = () => {
    navigate("/");
  };

  if (!eventDetails) {
    // Loading state or event not found
    return <div>Loading...</div>;
  }

  return (
    <div className="SingleEvent">
      <img
        className="SingleEvent-image"
        src={eventDetails.eventTitleImage}
        alt={eventDetails.title}
      />
      <div className="SingleEvent-details">
        <div className="SingleEvent-header">
          <button onClick={handleNavigate} className="Onboarding-back"></button>
          <h1 className="SingleEvent-title">{eventDetails.title}</h1>
          <p className="SingleEvent-description">{eventDetails.description}</p>
          <p className="SingleEvent-description-full">{generateDummyText()}</p>
        </div>
        <div className="SingleEvent-meta">
          <h2 className="SingleEvent-info">Evenementinformatie</h2>
          <p className="SingleEvent-date">{eventDetails.date}</p>
          <p className="SingleEvent-location">{eventDetails.location}</p>
          <p className="SingleEvent-organizer">{eventDetails.organizer}</p>
          <Link to="/events" className="Nav-account-link">
            <button className="onboarding-start">
              Ik ga naar dit evenement
            </button>
          </Link>
        </div>
      </div>
      <h2 className="SingleEvent-subtitle">Dit vonden jou vrienden er van</h2>
      <div className="SingleEvent-review">
        <div className="SingleEvent-review-title">
          <img
            className="SingleEvent-review-image"
            src={generateDummyImages()}
            alt="Review name"
          />
          <p className="SingleEvent-review-name">
            {generateDummyNames()} gaf een review van dit evenement
          </p>
        </div>
        <p className="SingleEvent-review-text">{generateDummyReviews()}</p>
      </div>
      <img className="SingleEvent-map" src={mapImg} alt="map of event" />
    </div>
  );
}

export default EventDetail;
