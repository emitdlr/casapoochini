// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmmu9XDS6RhV3X6qH-IB849xMRVnV8LX8",
  authDomain: "casapoochini.firebaseapp.com",
  projectId: "casapoochini",
  storageBucket: "casapoochini.appspot.com",
  messagingSenderId: "951248380483",
  appId: "1:951248380483:web:75a1d5fc9ad98f6f816af6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
