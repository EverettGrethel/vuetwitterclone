<template>
    <div>   
    <form @submit.prevent="login">     
        <h2>Login</h2>     
        <input       
        type="email"       
        placeholder="Email address"       
        v-model="email"     
        />    
        <input       
        type="password"       
        placeholder="Password"       
        v-model="password"     
        />     
        <button type="submit" v-on:submit.prevent="login">
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
        }; 
    },
    methods: {
        login() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
                localStore.setUser(cred.user);
                this.$router.push('/vuetwitterclone/');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    },
}

</script>