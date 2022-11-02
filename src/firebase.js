import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm9Q21923p7YmxiBKQoDCK8CBPx4ZlEuI",
  authDomain: "personal-daily-tracker.firebaseapp.com",
  projectId: "personal-daily-tracker",
  storageBucket: "personal-daily-tracker.appspot.com",
  messagingSenderId: "953310070210",
  appId: "1:953310070210:web:23d2713019a8881e7b425b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
