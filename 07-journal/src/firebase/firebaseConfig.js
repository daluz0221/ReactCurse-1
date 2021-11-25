
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDua-zKMnhYfJCtpRPlWcKVBEv2U6jDMMc",
    authDomain: "prueba-react-4717e.firebaseapp.com",
    databaseURL: "https://prueba-react-4717e-default-rtdb.firebaseio.com",
    projectId: "prueba-react-4717e",
    storageBucket: "prueba-react-4717e.appspot.com",
    messagingSenderId: "256112133301",
    appId: "1:256112133301:web:e09b4422e569e0aa84eafc"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();



export {
    db,
    googleAuthProvider
}