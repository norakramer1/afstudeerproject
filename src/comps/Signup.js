import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import WelcomeSection from "./WelcomeSection";
import SignupSection from "./SignupSection";
import InterestSection from "./InterestSection";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [interests, setInterests] = useState([]);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  // Handle checkbox changes in react
  const handleInterestChange = (e, interest) => {
    if (e.target.checked) {
      setInterests([...interests, interest]);
    } else {
      setInterests(interests.filter((item) => item !== interest));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Create the user in Firebase Authentication
      const userCredential = await createUser(email, password);
      const user = userCredential.user; // Access the user object

      if (user) {
        // Add the user's interests to Firestore
        await addUserInterestsToFirestore(user.uid, interests);

        navigate("/");
      } else {
        console.error("User object is not available.");
      }
    } catch (err) {
      setError(getErrorMessage(err.code));
      console.log(err.code);
    }
  };

  const addUserInterestsToFirestore = async (uid, interests) => {
    // const db = getFirestore();
    const userInterestsCollection = collection(db, "users");

    try {
      // Use the user's UID as the document ID in the "userInterests" collection
      const userInterestsDocRef = doc(userInterestsCollection, uid);

      // Set the user's interests in the document
      await setDoc(userInterestsDocRef, { interests });
    } catch (error) {
      console.error("Error adding user interests to Firestore: ", error);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "Email is al in gebruik, probeer een ander emailadres.";
      case "auth/invalid-email":
        return "Email is ongeldig. Probeer een ander emailadres.";
      case "auth/weak-password":
        return "Wachtwoord moet minimaal 6 tekens bevatten.";
      case "auth/missing-password":
        return "Wachtwoord is niet ingevuld.";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Email of wachtwoord is onjuist.";
      // Add more cases for other error codes as needed
      default:
        return "Er is iets onbekends misgegaan. Probeer het opnieuw.";
    }
  };

  const handleStartOnboarding = () => {
    setOnboardingStep((prevStep) => prevStep + 1);
  };

  const handleNextClick = () => {
    // Move to the next step
    setOnboardingStep((prevStep) => prevStep + 1);
  };
  const handlePrevClick = () => {
    // Move to the next step
    setOnboardingStep((prevStep) => prevStep - 1);
  };

  console.log(onboardingStep);
  return (
    <div className="Signup">
      {/* Render each section based on the onboarding step */}
      {onboardingStep === 1 && (
        <WelcomeSection onStartOnboarding={handleStartOnboarding} />
      )}

      {onboardingStep === 2 && (
        <InterestSection
          handleInterestChange={handleInterestChange}
          interests={interests}
          onSubmit={handleSubmit}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
        />
      )}

      {onboardingStep === 3 && (
        <SignupSection
          onSubmit={handleSubmit}
          handleInterestChange={handleInterestChange}
          email={email}
          setEmail={setEmail}
          password={password}
          error={error}
          setPassword={setPassword}
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
        />
      )}
    </div>
  );
};

export default Signup;
