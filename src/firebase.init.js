// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBynq4WRnrUAb3_H06376CaG18SQgbP8r4",
  authDomain: "simpletodoapp-21129.firebaseapp.com",
  projectId: "simpletodoapp-21129",
  storageBucket: "simpletodoapp-21129.appspot.com",
  messagingSenderId: "250662014335",
  appId: "1:250662014335:web:94aaeb88efddeef894de4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;