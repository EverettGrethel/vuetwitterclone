import firebase from 'firebase/app';
import 'firebase/firestore';


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
firebase.initializeApp(firebaseConfig);

const usersCollection = firebase.firestore().collection('users');
const postsCollection = firebase.firestore().collection('posts');

usersCollection
  .onSnapshot((usersRef) => {
    const users = [];
    usersRef.forEach((doc) => {
      const user = doc.data();
      user.id = doc.id;
      users.push(user);
    });
    store.users = users;
  });

postsCollection
  .onSnapshot((postsRef) => {
    const posts = [];
    postsRef.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);
    });
    store.posts = posts;
  });

const store = {
    state: {
        users: null,
        posts: null,
        currentUser: null,
        currentUserName: null,
    },
    setUser: (user) => {
        this.state.currentUser = user;
        console.log(user);
    },
    createUser: (cred, username) => {
        //initialize user
        console.log(cred.user);
        this.state.currentUser = cred.user;
        this.state.currentUserName = username;
        const uid = cred.user.uid;
        usersCollection.doc(uid)
        .set({
            join_date: new Date(),
            user_name: username,
            })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        //initialize user/friends
        usersCollection.doc(uid).collection('friends').doc('OItinPtaTsL5MeZu8f5A')
        .set({
            friend_name: "Barack Obama"
            })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }, { merge: true });

        //initialize user/friends/messages
        usersCollection.doc(uid).collection('friends').doc('OItinPtaTsL5MeZu8f5A').collection('messages').doc('PIOi6wpc7aciXpD9sk7t')
        .set({
            timestamp: new Date(),
            owner_bool: true,
            text: "U up?"
            })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }, { merge: true });

        //initialize user/liked_posts
        usersCollection.doc(uid).collection('liked_posts').doc('KgY6hIXGFpP745H9vhYX')
        .set({}, { merge: true })
        .then((docRef) => {
            console.log("User Document written with ID: ", docRef.id);
            })
        .catch((error) => {
            console.error("Error adding user document: ", error);
        });
    },
    addNewPost: (newPost) => {
        postsCollection.add({
            likes: 0,
            text: newPost,
            timestamp: new Date(),
            user_id: this.state.currentUser.uid,
            user_name: this.state.currentUserName,
        })
        .then((docRef) => {
            console.log("Post Document written with ID: ", docRef.id);
            })
        .catch((error) => {
            console.error("Error adding post document: ", error);
        });
    },
};

export default store;