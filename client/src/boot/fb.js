// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA0h1I5a-Kg0-5_CvYi4piFYJvw-rcax8",
  authDomain: "project-0727-d6c11.firebaseapp.com",
  databaseURL: "https://project-0727-d6c11-default-rtdb.firebaseio.com",
  projectId: "project-0727-d6c11",
  storageBucket: "project-0727-d6c11.appspot.com",
  messagingSenderId: "479172916220",
  appId: "1:479172916220:web:cf5eac5ec383503e82f879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{ app }
