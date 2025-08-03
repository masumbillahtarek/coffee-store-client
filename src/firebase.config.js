// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjP8vhiDN0nJVv_D5WR390bZAj_8PzBOA",
  authDomain: "coffee-server-client-c5c83.firebaseapp.com",
  projectId: "coffee-server-client-c5c83",
  storageBucket: "coffee-server-client-c5c83.firebasestorage.app",
  messagingSenderId: "954181953690",
  appId: "1:954181953690:web:837a2a04f06edc253b1723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;