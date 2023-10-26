// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1Ffq4dv-kWrgWnnGDops24QSL-lq1yYI",
    authDomain: "cmd-culture-app.firebaseapp.com",
    projectId: "cmd-culture-app",
    storageBucket: "cmd-culture-app.appspot.com",
    messagingSenderId: "785451233117",
    appId: "1:785451233117:web:88d4af27595ec4459582b4"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();

export { projectStorage, projectFirestore };