// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpW-k4KxgDr6KvNnTNBNjLucqQDT2uiIY",
  authDomain: "blog-f8534.firebaseapp.com",
  projectId: "blog-f8534",
  storageBucket: "blog-f8534.appspot.com",
  messagingSenderId: "268354862024",
  appId: "1:268354862024:web:16369b303384cefbcf1efd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provifer = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provifer, db };
