// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCscWuX-vQk-ykpfAHFSV1p82_C_Z4yIVg",
    authDomain: "netflixgpt-77b00.firebaseapp.com",
    projectId: "netflixgpt-77b00",
    storageBucket: "netflixgpt-77b00.appspot.com",
    messagingSenderId: "769534483611",
    appId: "1:769534483611:web:fb937e7ccc15e1b3a63a3e",
    measurementId: "G-R0VG9B5QHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
