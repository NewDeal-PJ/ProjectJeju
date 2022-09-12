// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFIon1eLkKxjPOBkPdYuc9Hy5hpRklSAk",
  authDomain: "quasarinjeju.firebaseapp.com",
  projectId: "quasarinjeju",
  storageBucket: "quasarinjeju.appspot.com",
  messagingSenderId: "979915638111",
  appId: "1:979915638111:web:1f52da8bcac5e530eae2ea",
  measurementId: "G-BLPHTLY0Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);