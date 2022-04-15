// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDakYpD55EYUWyFZlM29QZzrF_yAzdy5Pg",
    authDomain: "red-onion-22698.firebaseapp.com",
    projectId: "red-onion-22698",
    storageBucket: "red-onion-22698.appspot.com",
    messagingSenderId: "545053742988",
    appId: "1:545053742988:web:037662625cf34b1ba628a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
