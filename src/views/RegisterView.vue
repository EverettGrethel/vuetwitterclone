<template>
    <div class="mt-10 flex flex-col">
        <form @submit.prevent="register" class="p-10">
            <h2>Register</h2>
            <input
            type="email"
            placeholder="Email address..."
            v-model="email"
            class="border-2"
            />
            <input
            type="text"
            placeholder="Username"
            v-model="username"
            class="border-2"
            />
            <input
            type="password"
            placeholder="password..."
            v-model="password"
            class="border-2"
            />
            <button class="border-2" type="submit">Register</button>
        </form>
        <router-link 
            to="/Login"
            class="text-lg px-10 py-5 font-semibold text-left hidden lg:block"
            >Already have account? Login Here
        </router-link>
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
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
                localStore.createUser(cred, this.username);
                console.log('success!');
                this.$router.push('/vuetwitterclone/');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    }
}

</script>