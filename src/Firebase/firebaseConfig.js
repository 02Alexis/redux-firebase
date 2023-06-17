// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaLYXQS0l8qWcPHqbq9egtsZ6_QeNU_UM",
  authDomain: "redux-firebase-37565.firebaseapp.com",
  projectId: "redux-firebase-37565",
  storageBucket: "redux-firebase-37565.appspot.com",
  messagingSenderId: "608123203928",
  appId: "1:608123203928:web:029da56a7ae76b0f93752d",
  measurementId: "G-VWHZPYEFF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dataBase = getFirestore(app)