import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqXVF0rs8zcjwTNKehZtmzqYUv0UIBLpQ",
    authDomain: "app-facility-management.firebaseapp.com",
    databaseURL: "https://app-facility-management.firebaseio.com",
    projectId: "app-facility-management",
    storageBucket: "app-facility-management.appspot.com",
    messagingSenderId: "324882765961",
    appId: "1:324882765961:web:06266f3a4fb727a1f7ce58",
    measurementId: "G-FRZR1XZ19B"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;