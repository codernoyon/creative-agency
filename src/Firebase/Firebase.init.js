// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHEubvPxjgEbAjUVbF-p00tXJS0crz_rY",
    authDomain: "creative-agency-mini.firebaseapp.com",
    projectId: "creative-agency-mini",
    storageBucket: "creative-agency-mini.appspot.com",
    messagingSenderId: "473610607096",
    appId: "1:473610607096:web:b39bfd1bcf89ab0d099e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;