// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXUW3Yva_Dp8crOupuUlfa8h8ovvGN_GY",
  authDomain: "skillboost-cebbb.firebaseapp.com",
  projectId: "skillboost-cebbb",
  storageBucket: "skillboost-cebbb.appspot.com",
  messagingSenderId: "331604931209",
  appId: "1:331604931209:web:e7d89326b556b076948c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;