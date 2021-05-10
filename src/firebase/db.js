import firebase from 'firebase';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCdpjpNqjfvbkKm-wlHW4VEaIFgquKzZ7U",
    authDomain: "vue-twitter-clone-cd27b.firebaseapp.com",
    projectId: "vue-twitter-clone-cd27b",
    storageBucket: "vue-twitter-clone-cd27b.appspot.com",
    messagingSenderId: "443980865885",
    appId: "1:443980865885:web:9c19e98e49491efc4348b4",
    measurementId: "G-5KBVY13TBF"
  };
  // Initialize Firebase

  // Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp } = firebase.firestore
export { Timestamp }

export const db = firebase.initializeApp(firebaseConfig).firestore();
firebase.analytics();