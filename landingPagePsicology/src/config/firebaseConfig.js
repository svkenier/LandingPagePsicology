// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwONinUhLUPpi3OmXr1ZaPZsqK1COcrrE",
  authDomain: "protege-tu-psique.firebaseapp.com",
  projectId: "protege-tu-psique",
  storageBucket: "protege-tu-psique.firebasestorage.app",
  messagingSenderId: "193973010404",
  appId: "1:193973010404:web:dc7bd24efccc69cb72d1f1",
  measurementId: "G-7YVW71B4M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
