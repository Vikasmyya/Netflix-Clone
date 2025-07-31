// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNgYQ72DBxOtRC4Eq7Uu1PuvqM8cF-oZ8",
  authDomain: "netflixgpt-7069b.firebaseapp.com",
  projectId: "netflixgpt-7069b",
  storageBucket: "netflixgpt-7069b.firebasestorage.app",
  messagingSenderId: "297371356481",
  appId: "1:297371356481:web:4a081c81b8737468ac65c0",
  measurementId: "G-3XY7G1S67R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
