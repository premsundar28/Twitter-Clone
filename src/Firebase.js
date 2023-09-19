import Firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_T-MJsH3QG8GAZc6PJwn8yEhuNebgTqo",
  authDomain: "twitter-clone-e9a3b.firebaseapp.com",
  projectId: "twitter-clone-e9a3b",
  storageBucket: "twitter-clone-e9a3b.appspot.com",
  messagingSenderId: "652334786938",
  appId: "1:652334786938:web:a0b0a41de086041fbc8ec3",
  measurementId: "G-4E8RH4P9KS"
};

const FirebaseApp = Firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();

export default db;