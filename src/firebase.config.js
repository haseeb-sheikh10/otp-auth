// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9zaaYEyg3nnG7uTrEiwCHHoH2EeTosvA",
  authDomain: "otp-auth-sample.firebaseapp.com",
  projectId: "otp-auth-sample",
  storageBucket: "otp-auth-sample.appspot.com",
  messagingSenderId: "499244799610",
  appId: "1:499244799610:web:63c0af635c8a357d7c4dc3",
  measurementId: "G-FL001PH67F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 