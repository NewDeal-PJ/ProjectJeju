// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAc02na03l4WHPQxA6Y451H9khrrUXODo",
  authDomain: "projectjeju-479a0.firebaseapp.com",
  projectId: "projectjeju-479a0",
  storageBucket: "projectjeju-479a0.appspot.com",
  messagingSenderId: "539992187416",
  appId: "1:539992187416:web:dbb144deb68c9df0e6d96d",
  measurementId: "G-35D2XYLGKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);