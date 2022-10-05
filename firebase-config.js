import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDwLDivaAg_n7OABkNZHAQDYo417l547w",
    authDomain: "bankingappauth.firebaseapp.com",
    projectId: "bankingappauth",
    storageBucket: "bankingappauth.appspot.com",
    messagingSenderId: "998775068210",
    appId: "1:998775068210:web:8af5f07c871f6a34ae4e2b",
    measurementId: "G-TGGNJBFB7P"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);