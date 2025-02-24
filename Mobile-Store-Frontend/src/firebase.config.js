// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMKnTgKwb7z0xWZF0Qp1rXpz7G6wN8F1E",
  authDomain: "mobile-store-e8fbd.firebaseapp.com",
  projectId: "mobile-store-e8fbd",
  storageBucket: "mobile-store-e8fbd.firebasestorage.app",
  messagingSenderId: "214335658252",
  appId: "1:214335658252:web:5d3e8f3cdbf8577b9c5129",
  measurementId: "G-2JPS96PZER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);