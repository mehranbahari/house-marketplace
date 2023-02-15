import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmrpjYdziwVF4iFP9Z7e5PMN1_KDuS6rk",
  authDomain: "house-marketplace-app-3d2f7.firebaseapp.com",
  projectId: "house-marketplace-app-3d2f7",
  storageBucket: "house-marketplace-app-3d2f7.appspot.com",
  messagingSenderId: "91092035991",
  appId: "1:91092035991:web:aa4037b513979ebc433cd2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
