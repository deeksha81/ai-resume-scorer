
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

 
const firebaseConfig = {
  apiKey: "AIzaSyDs_j4gSct4LtzFHY2WR-2nvRy1-RhCyYo",
  authDomain: "mern-ai-fc677.firebaseapp.com",
  projectId: "mern-ai-fc677",
  storageBucket: "mern-ai-fc677.firebasestorage.app",
  messagingSenderId: "657772644476",
  appId: "1:657772644476:web:e989d781fcd9d656f721f9",
  measurementId: "G-Q241ZEL6NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider};

