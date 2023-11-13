import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [interests, setInterests] = useState([]);
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
    setError('');
    try {
      // Create the user in Firebase Authentication
      const userCredential = await createUser(email, password);
      const user = userCredential.user; // Access the user object

      if (user) {
        // Add the user's interests to Firestore
        await addUserInterestsToFirestore(user.uid, interests);

        navigate('/');
      } else {
        console.error("User object is not available.");
      }
    } catch (err) {
      setError(err.message);
      console.error(err.message);
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

    return (
<div>
    <div className="Signup">
        <h1>Signup</h1>
        <p>Sign up to create your account</p>
        <p>Already have an account?  <Link to='/login'>Sign in</Link></p>
    </div>

    <div className="form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />

            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

            <input
                type="checkbox"
                id="art"
                name="interest"
                value="art"
                onChange={(e) => handleInterestChange(e, "art")}
            />
            <label htmlFor="art">Art</label>

            <input
                type="checkbox"
                id="theater"
                name="interest"
                value="theater"
                onChange={(e) => handleInterestChange(e, "theater")}
            />
            <label htmlFor="theater">Theater</label>

            <input
                type="checkbox"
                id="music"
                name="interest"
                value="music"
                onChange={(e) => handleInterestChange(e, "music")}
            />
            <label htmlFor="music">Music</label>

            <input
                type="checkbox"
                id="film"
                name="interest"
                value="film"
                onChange={(e) => handleInterestChange(e, "film")}
            />
            <label htmlFor="film">Film</label>

{/* Add similar input elements for other interests */}

            
            <button type="submit">Sign up</button>
        </form>
    </div>
  </div>
 )
}   
export default Signup;