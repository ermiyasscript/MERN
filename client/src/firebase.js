// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-cfce2.firebaseapp.com",
  projectId: "mern-cfce2",
  storageBucket: "mern-cfce2.firebasestorage.app",
  messagingSenderId: "563920647561",
  appId: "1:563920647561:web:aee82cdb348464af9f5d58"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);