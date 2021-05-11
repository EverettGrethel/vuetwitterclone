<template>
    <div>
    <form @submit.prevent="register">
        <h2>Register</h2>
        <input
        type="email"
        placeholder="Email address..."
        v-model="email"
        />
        <input
        type="text"
        placeholder="Username"
        v-model="username"
        />
        <input
        type="password"
        placeholder="password..."
        v-model="password"
        />
        <button type="submit">Register</button>
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
        register() {
            firebase
            .auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
                localStore.createUser(cred, this.username);
                this.$router.push('/');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    }
}

</script>