import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPCaHQgZM9ijwdsfp7qVnSRFno2ZlRPos",
  authDomain: "campus-comrade.firebaseapp.com",
  projectId: "campus-comrade",
  storageBucket: "campus-comrade.appspot.com",
  messagingSenderId: "1035539756571",
  appId: "1:1035539756571:web:b9439acc84295c71142abe",
  measurementId: "G-3WBTXXQTVQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
