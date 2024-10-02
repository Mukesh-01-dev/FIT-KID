import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCAl7JmTuCXPnIDT9rCnO1x1XfaW4grqPs",
  authDomain: "fittkid-01.firebaseapp.com",
  projectId: "fittkid-01",
  storageBucket: "fittkid-01.appspot.com",
  messagingSenderId: "709751634407",
  appId: "1:709751634407:web:8cba54fa9be01b2283e542",
  measurementId: "G-675JD4S8XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();