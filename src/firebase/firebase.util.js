import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCi0Vjf6NwpyEXSGZgJpSO6A1lJPsLU3Zc",
  authDomain: "crwn-db-f37b6.firebaseapp.com",
  projectId: "crwn-db-f37b6",
  storageBucket: "crwn-db-f37b6.appspot.com",
  messagingSenderId: "895565577178",
  appId: "1:895565577178:web:b7125ea13c9151d5f6dee3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
// Prompt with a pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
