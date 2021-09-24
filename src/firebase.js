import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8QEsHQEGfUVPKrJ1GRdNx3wPau1HmZ54",
  authDomain: "linkedin-clone-5c106.firebaseapp.com",
  projectId: "linkedin-clone-5c106",
  storageBucket: "linkedin-clone-5c106.appspot.com",
  messagingSenderId: "821417828627",
  appId: "1:821417828627:web:1728326ff5e28a2d5ffae6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
