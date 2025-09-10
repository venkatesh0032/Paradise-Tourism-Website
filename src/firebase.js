// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKjTgZ-jSTw8tBX3QhyzZKVYE7isuU540",
  authDomain: "paradasi-tourism.firebaseapp.com",
  databaseURL: "https://paradasi-tourism-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "paradasi-tourism",
  storageBucket: "paradasi-tourism.appspot.com",
  messagingSenderId: "345477590300",
  appId: "1:345477590300:web:3abcf2757a049bd07dded9",
  measurementId: "G-YNQK6QEWF8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
