// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK41IjoxdnLXOJan07TmSBZjr9yYNQSd4",
  authDomain: "teste-1-cd537.firebaseapp.com",
  projectId: "teste-1-cd537",
  storageBucket: "teste-1-cd537.appspot.com",
  messagingSenderId: "749436108889",
  appId: "1:749436108889:web:e24a206303cfdc696bf148",
  measurementId: "G-WVER49FDF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);