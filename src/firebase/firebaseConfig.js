// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKjTgZ-jSTw8tBX3QhyzZKVYE7isuU540",
  authDomain: "paradasi-tourism.firebaseapp.com",
  databaseURL: "https://paradasi-tourism-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "paradasi-tourism",
  storageBucket: "paradasi-tourism.firebasestorage.app",
  messagingSenderId: "345477590300",
  appId: "1:345477590300:web:3abcf2757a049bd07dded9",
  measurementId: "G-YNQK6QEWF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export auth
export const auth = getAuth(app);
