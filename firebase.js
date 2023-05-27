// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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


export {app}