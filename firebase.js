// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeA1xS1ADNHbzj-j36S_6jdUpcrvbo2Cc",
  authDomain: "chatmsg-f7f88.firebaseapp.com",
  projectId: "chatmsg-f7f88",
  storageBucket: "chatmsg-f7f88.appspot.com",
  messagingSenderId: "443000218576",
  appId: "1:443000218576:web:163433f9f2901294020fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {app, db, collection, addDoc, getDocs, auth, createUserWithEmailAndPassword, updateProfile}