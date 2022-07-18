import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_7vUBfyJF0NetgMJVJkcdq7Xk11_-HPg",
  authDomain: "disneyplus-clone-f3f36.firebaseapp.com",
  projectId: "disneyplus-clone-f3f36",
  storageBucket: "disneyplus-clone-f3f36.appspot.com",
  messagingSenderId: "250975431460",
  appId: "1:250975431460:web:7a52dbb51b87cca6db61b1",
  measurementId: "G-N2W9DDN1L9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
