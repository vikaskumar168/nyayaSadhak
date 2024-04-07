// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIn78b5xpKeHuJqUZcq677knpzNWGDX0s",
  authDomain: "login-12306.firebaseapp.com",
  projectId: "login-12306",
  storageBucket: "login-12306.appspot.com",
  messagingSenderId: "698489248167",
  appId: "1:698489248167:web:5c44d0cbe4931314e1fe82",
  measurementId: "G-DPJYY2L7T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export { app, auth };
