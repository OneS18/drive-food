import firebase from "firebase";
import dotenv from "dotenv";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "food-driver-c9cfe.firebaseapp.com",
  projectId: "food-driver-c9cfe",
  storageBucket: "food-driver-c9cfe.appspot.com",
  messagingSenderId: "43282508522",
  appId: "1:43282508522:web:f43b8ea5e645d7495e0593",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
