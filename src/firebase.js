// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "my-unplash-cc71e.firebaseapp.com",
  projectId: "my-unplash-cc71e",
  storageBucket: "my-unplash-cc71e.appspot.com",
  messagingSenderId: "870343557103",
  appId: "1:870343557103:web:f53e40f913c718a43c801a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const auth = getAuth(app)
/* Providers */
export const googleProvider = new GoogleAuthProvider()