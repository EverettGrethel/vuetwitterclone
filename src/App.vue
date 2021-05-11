<template>
  <div id="app" class="flex container h-screen w-full">
    <TheSidebar />
    <router-view :key="$route.path" />
    <TheTrending />
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import TheTrending from "@/components/TheTrending";
import firebase from 'firebase';
import localStore from '@/localStore.js';

export default {
  components: {
    TheSidebar,
    TheTrending
  },
  created() {
      firebase.auth().onAuthStateChanged(user => {
          if (!user) {
            this.$router.replace({name:"Login"});
          } else {
            localStore.setUser(user);
          }
      })
  }
}

</script>
