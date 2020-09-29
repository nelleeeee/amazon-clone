import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAS1dtl4KEeIF6U4aFkcKnrV_kczT_bmZw",
  authDomain: "clone-215e2.firebaseapp.com",
  databaseURL: "https://clone-215e2.firebaseio.com",
  projectId: "clone-215e2",
  storageBucket: "clone-215e2.appspot.com",
  messagingSenderId: "812697711767",
  appId: "1:812697711767:web:92a4fe9456a6982309a5d2",
  measurementId: "G-W8R1WTPNN7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
