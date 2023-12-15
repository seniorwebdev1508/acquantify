// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
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
  measurementId: "G-9XCHKM6JQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {

  return new Promise ((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      resolve ("success");
    })
    .catch((error) => {
      reject ("false");
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  });

};
const logInWithEmailAndPassword = async (email, password) => {

  return new Promise ((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        console.log (userCredential);
        const user = userCredential.user;
        resolve ("success");
      })
      .catch ((err) => {
        console.log (err);
        reject ("false");
      });
  });

};
const registerWithEmailAndPassword = async (name, email, password) => {
  let result;

  return new Promise ((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then ((userCredential) => {
        const user = userCredential.user;
        resolve ('success');
      })
      .catch ((err) => {
        console.log (err);
        reject ("false");
      });
  });
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
