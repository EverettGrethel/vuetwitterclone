import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCdpjpNqjfvbkKm-wlHW4VEaIFgquKzZ7U",
    authDomain: "vue-twitter-clone-cd27b.firebaseapp.com",
    projectId: "vue-twitter-clone-cd27b",
    storageBucket: "vue-twitter-clone-cd27b.appspot.com",
    messagingSenderId: "443980865885",
    appId: "1:443980865885:web:9c19e98e49491efc4348b4",
    measurementId: "G-5KBVY13TBF"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}