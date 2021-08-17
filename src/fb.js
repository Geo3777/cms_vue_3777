import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCAmYCWD4ecKJh0hqXnMDbfYgw_-jnrhwM",
  authDomain: "cms3777-9ff45.firebaseapp.com",
  projectId: "cms3777-9ff45",
  storageBucket: "cms3777-9ff45.appspot.com",
  messagingSenderId: "641212227010",
  appId: "1:641212227010:web:099e307aa755fd14e60a5b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
