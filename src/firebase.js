// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwV34IbMccJ1SoORD0qmY8_AAOJ7oq3oI",
  authDomain: "hanghae-react-8ca3a.firebaseapp.com",
  projectId: "hanghae-react-8ca3a",
  storageBucket: "hanghae-react-8ca3a.appspot.com",
  messagingSenderId: "836610416958",
  appId: "1:836610416958:web:6e48c4308d56e62bc18c6f",
  measurementId: "G-Z2086CJXM6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
