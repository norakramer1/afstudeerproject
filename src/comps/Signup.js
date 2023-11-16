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
        <h1>Maak een account</h1>
        <p>Heb je al een account?  <Link to='/login'>Login</Link></p>
   

    <div className="form">
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" placeholder="Username" />

            {/* <label htmlFor="email">Email</label> */}
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />

            {/* <label htmlFor="password">Password</label> */}
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            
            <div className="interests">
            <input
                type="checkbox"
                id="Kunst"
                name="interest"
                value="Kunst"
                onChange={(e) => handleInterestChange(e, "Kunst")}
            />
            <label htmlFor="Kunst">Kunst</label>

            <input
                type="checkbox"
                id="Theater"
                name="interest"
                value="Theater"
                onChange={(e) => handleInterestChange(e, "Theater")}
            />
            <label htmlFor="Theater">Theater</label>

            <input
                type="checkbox"
                id="Muziek"
                name="interest"
                value="Muziek"
                onChange={(e) => handleInterestChange(e, "Muziek")}
            />
            <label htmlFor="Muziek">Muziek</label>

            <input
                type="checkbox"
                id="Film"
                name="interest"
                value="Film"
                onChange={(e) => handleInterestChange(e, "Film")}
            />
            <label htmlFor="Film">Film</label>

               <input
                type="checkbox"
                id="Design"
                name="interest"
                value="Design"
                onChange={(e) => handleInterestChange(e, "Design")}
            />
            <label htmlFor="Film">Film</label>

               <input
                type="checkbox"
                id="Games"
                name="interest"
                value="Games"
                onChange={(e) => handleInterestChange(e, "Games")}
            />
            <label htmlFor="Games">Games</label>

               <input
                type="checkbox"
                id="Reizen"
                name="interest"
                value="Reizen"
                onChange={(e) => handleInterestChange(e, "Reizen")}
            />
            <label htmlFor="Reizen">Reizen</label>

               <input
                type="checkbox"
                id="Sport"
                name="interest"
                value="Sport"
                onChange={(e) => handleInterestChange(e, "Sport")}
            />
            <label htmlFor="Sport">Sport</label>
            </div>
            
            <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  </div>
 )
}   
export default Signup;