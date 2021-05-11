<template>
    <div>   
    <form @submit.prevent="login">     
        <h2>Login</h2>     
        <input       
        type="email"       
        placeholder="Email address..."       
        v-model="email"     
        />     
        <input       
        type="password"       
        placeholder="password..."       
        v-model="password"     
        />     
        <button type="submit">
        Login
        </button>   
    </form> 
    </div>
</template>

<script>
import firebase from 'firebase';
import localStore from '../localStore.js';

export default {
    data() { 
        return { 
            email: '', 
            password: '',
            username: '',
        }; 
    },
    methods: {
        login() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
                alert('Successfully logged in');
                localStore.setUser(cred.user);
                this.$router.push('/');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    },
}

</script>