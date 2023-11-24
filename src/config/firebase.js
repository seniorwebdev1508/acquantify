// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxonqQw4-DEsDSQL3PewFQGpr2x-RmkRo",
  authDomain: "acquantify.firebaseapp.com",
  projectId: "acquantify",
  storageBucket: "acquantify.appspot.com",
  messagingSenderId: "200954215376",
  appId: "1:200954215376:web:4f6f8dc1c1110a34e197d5",
  measurementId: "G-9XCHKM6JQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;