// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'

// https://firebase.google.com/docs/web/setup#available-libraries
import { } from 'firebase/compat/auth';
import { } from 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmald80SMDqqdfmFzph6PpbdG2AkOJBfE",
  authDomain: "projectplan-reactfirst.firebaseapp.com",
  projectId: "projectplan-reactfirst",
  storageBucket: "projectplan-reactfirst.appspot.com",
  messagingSenderId: "205833795849",
  appId: "1:205833795849:web:ae699edb338843a2e2fbd8",
  measurementId: "G-VJK56JVDVZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//update in firebase library which changes how firebase work with time stamps
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;