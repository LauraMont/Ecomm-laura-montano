// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjLhCi5g_bhYPAo1DtnnEVM_wHf0KCFUs",
    authDomain: "ecomm-lauramontano.firebaseapp.com",
    projectId: "ecomm-lauramontano",
    storageBucket: "ecomm-lauramontano.appspot.com",
    messagingSenderId: "460547610432",
    appId: "1:460547610432:web:b2b82a724f6383f086cca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;