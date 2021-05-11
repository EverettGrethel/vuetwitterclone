<template>
<div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col">
  <ul class="nav-links focus:outline-none hover:text-blue flex flex-col items-center py-2 px-4 hover:bg-lightblue rounded-full mb-3">
        <li class="links">
            <figure>
            <router-link to="/vuetwitterclone/">
                <img
                    class="lg:ml-3 h-8 w-12 lg:h-12 lg:w-12"
                    :src="require(`@/assets/logo.png`)"
                    alt="brain logo"
                />
                <h1 class="font-bold text-2xl pt-2 pb-10 hidden lg:block">Thinker</h1>
            </router-link>
            </figure>
        </li>
        <li class="links">
          <router-link 
            to="/vuetwitterclone/"
            class="text-lg font-semibold text-left hidden lg:block"
          >Home
          </router-link>
        </li>
        <li class="links">
          <router-link 
            to="/Messages"
            class="text-lg font-semibold text-left hidden lg:block"
          >Messages
          </router-link>
        </li>
        <li class="links">
          <router-link 
            to="/Profile"
            class="text-lg font-semibold text-left hidden lg:block"
          >Profile
          </router-link>
        </li>
  </ul>
    <button v-on:click="logOut" class="bg-gray-100 rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
        <p class="lg:block">Log Out</p>
        <!--<i class="fas fa-plus lg:hidden"></i>-->
    </button>
</div>
</template>

<script>
import localStore from "@/localStore.js";

export default {
  name: "TheSidebar",
  components: {
    
  },
  data() {
    return {
      tabs: localStore.tabs,
    };
  },
  methods: {
    logOut() {
      localStore.signOut();
    }
  }
};
</script>
