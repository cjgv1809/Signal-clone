import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Mn4HIIlqz0h8NM1VrZnsdn04tz66Y6U",
  authDomain: "signal-clone-a5d90.firebaseapp.com",
  projectId: "signal-clone-a5d90",
  storageBucket: "signal-clone-a5d90.appspot.com",
  messagingSenderId: "524824387999",
  appId: "1:524824387999:web:1a9d48960b61d689ef1daa",
  measurementId: "G-7DTSY3QK6L",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
