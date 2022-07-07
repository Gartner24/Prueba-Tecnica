import { initializeApp } from "@firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDY1SczJUDyaP0bv8lkvDCY655W57KtpdQ",
    authDomain: "prueba-tecnica-195c8.firebaseapp.com",
    projectId: "prueba-tecnica-195c8",
    storageBucket: "prueba-tecnica-195c8.appspot.com",
    messagingSenderId: "102756025437",
    appId: "1:102756025437:web:e62325dc48a0bdecc9f9b4"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const dataBase = getFirestore()

export {
    app,
    google,
    facebook,
    dataBase
};