// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_dcnwXbmU85pWudxSv92nfIUdd3ckWqc",
  authDomain: "ema-john-simple-c1468.firebaseapp.com",
  projectId: "ema-john-simple-c1468",
  storageBucket: "ema-john-simple-c1468.appspot.com",
  messagingSenderId: "12395742162",
  appId: "1:12395742162:web:1cdf332a06c60dbbe1be0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
