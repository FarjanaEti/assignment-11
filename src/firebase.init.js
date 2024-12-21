// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtiBGTVZnG7vtPp1GM8s48jZpANKVWOE",
  authDomain: "food-shearing.firebaseapp.com",
  projectId: "food-shearing",
  storageBucket: "food-shearing.firebasestorage.app",
  messagingSenderId: "1051706977487",
  appId: "1:1051706977487:web:81f063227502a1fec55bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);