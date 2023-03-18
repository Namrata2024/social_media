// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmLrkjYV37-4M3PIsnQ3PRZd2Sn-wxogU",
  authDomain: "react-project-720e8.firebaseapp.com",
  projectId: "react-project-720e8",
  storageBucket: "react-project-720e8.appspot.com",
  messagingSenderId: "1082774700741",
  appId: "1:1082774700741:web:f6467882d37db9dc5466ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);