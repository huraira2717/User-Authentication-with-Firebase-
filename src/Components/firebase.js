// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYPon3WPm7gEMCN34HvfuKWGKN_0QciV0",
  authDomain: "userauth-task2.firebaseapp.com",
  projectId: "userauth-task2",
  storageBucket: "userauth-task2.appspot.com",
  messagingSenderId: "176683356142",
  appId: "1:176683356142:web:2e6b44464ee1cad29348ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app , auth}
