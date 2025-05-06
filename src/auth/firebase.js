import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDA6uVEfsmcPof1-eDzX_jb6XjESSJXjTA",
  authDomain: "righticeng.firebaseapp.com",
  projectId: "righticeng",
  storageBucket: "righticeng.firebasestorage.app",
  messagingSenderId: "397491529980",
  appId: "1:397491529980:web:4fa15f5afc94b2c0e7cf79",
  measurementId: "G-YNZ6H1JQ1T",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Google provider
const provider = new GoogleAuthProvider();

// Initialize Firebase analytics (optional, but useful)
getAnalytics(app);

// Export all necessary Firebase methods
export {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
  updateProfile,
};
