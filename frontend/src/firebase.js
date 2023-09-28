// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAGcEtym8ViAFyGjNfw_2JhjA3Zxupic4",
  authDomain: "suscomwebapp-400418.firebaseapp.com",
  projectId: "suscomwebapp-400418",
  storageBucket: "suscomwebapp-400418.appspot.com",
  messagingSenderId: "64565981423",
  appId: "1:64565981423:web:1d4690b3d31636219feb1a",
  measurementId: "G-XNPQK61RW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;