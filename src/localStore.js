import firebase from 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue';


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
  .orderBy('timestamp')
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
    },
    signOut: function() {
        localStorage
        firebase.auth().signOut().then(() => {
            console.log("sign out successful");
        })
    },
    setUser: function(user, username=null) {
        if (!username) {
            console.log('user: ');  
            console.log(user);
            usersCollection.doc(user.uid).get()
            .then((doc) => {
                console.log(doc);
                Vue.currentUserName = doc.data().user_name;
                localStorage.currentUserName = username;
                console.log(`Success! user is ${Vue.currentUserName}`);
                console.log(`Locally: ${localStorage.currentUserName}`);
            }).catch((error) => {
                console.log("Error getting username document:", error);
            });
        } else {
            Vue.currentUserName = username;
            localStorage.currentUserName = username;
        }

        Vue.currentUser = user;
        localStorage.currentUser = user;
    },
    createUser: function(cred, username) {
        //initialize user
        this.setUser(cred.user, username);
        console.log("user succesfully created!");
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
            console.error("Error adding user document: ", error);
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
            console.error("Error adding friends document: ", error);
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
            console.error("Error adding messages document: ", error);
        }, { merge: true });

        //initialize user/liked_posts
        usersCollection.doc(uid).collection('liked_posts').doc('KgY6hIXGFpP745H9vhYX')
        .set({})
        .then((docRef) => {
            console.log("User Document written with ID: ", docRef.id);
            })
        .catch((error) => {
            console.error("Error adding liked_posts document: ", error);
        });
    },
    addNewPost: function(newPost) {
        let post;
        console.log(`username: ${Vue.currentUserName}`);
        postsCollection.add({
            likes: 0,
            text: newPost,
            timestamp: new Date(),
            user_id: Vue.currentUser.uid,
            user_name: Vue.currentUserName,
        })
        .then((docRef) => {
            console.log("Post Document written with ID: ", docRef.id);
            postsCollection.doc(docRef.id).get()
            .then((doc) => {
                post = doc.data();
                console.log(`new post: ${post.user_name}`);
            }).catch((error) => {
                console.error("Error getting post document: ", error);
            });
        })
        .catch((error) => {
            console.error("Error adding post document: ", error);
        });
        return post;
    },
    getPosts: function() {
        let updatedPosts;
        postsCollection
            .orderBy('timestamp')
            .onSnapshot((postsRef) => {
                const posts = [];
                postsRef.forEach((doc) => {
                const post = doc.data();
                post.id = doc.id;
                posts.push(post);
                });
                updatedPosts = posts;
        });
        return updatedPosts;
    },
};

export default store;