
import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
    apiKey: "AIzaSyBiQyU-yRvda_SZqyLYqJk4eu0rtHhexR0",
    authDomain: "food-driver-c9cfe.firebaseapp.com",
    projectId: "food-driver-c9cfe",
    storageBucket: "food-driver-c9cfe.appspot.com",
    messagingSenderId: "43282508522",
    appId: "1:43282508522:web:f43b8ea5e645d7495e0593"
  };

const app = initializeApp(firebasConfig)
const db = getFirestore(app)