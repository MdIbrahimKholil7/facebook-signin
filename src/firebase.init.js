// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7F3s63VCEwnLEt7RfqOyMs4aOclpTbqo",
  authDomain: "face-book-f26a9.firebaseapp.com",
  projectId: "face-book-f26a9",
  storageBucket: "face-book-f26a9.appspot.com",
  messagingSenderId: "581889857516",
  appId: "1:581889857516:web:9acb0f9b9d6f2917b052c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth