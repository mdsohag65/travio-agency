// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALBDbsRvAlnC2Afd6Yu0Jd1UIoxmIVVOc",
    authDomain: "travio-agency.firebaseapp.com",
    projectId: "travio-agency",
    storageBucket: "travio-agency.appspot.com",
    messagingSenderId: "898770628083",
    appId: "1:898770628083:web:e5fa32e353b27dff997686"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;