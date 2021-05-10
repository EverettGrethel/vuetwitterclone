<template>
<div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
    <ul class="nav-links focus:outline-none hover:text-blue flex flex-col items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3">
        <li class="links">
            <figure>
            <router-link to="/">
                <img
                    class="h-12 w-13"
                    :src="require(`@/assets/logo.png`)"
                    alt="brain logo"
                />
            </router-link>
            </figure>
        </li>
        <li
            v-for="tab in tabs"
            :key="tab.name"
            class="links">
          <router-link 
            :to="{
              name: tab.name,
            }"
            class="text-lg font-semibold text-left hidden lg:block"
          >
            {{ tab.name }}
          </router-link>
        </li>
    </ul>
    <button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
        <p class="hidden lg:block">Tweet</p>
        <!--<i class="fas fa-plus lg:hidden"></i>-->
    </button>
</div>
</template>

<script>
import store from "@/store.js";

export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      tabs: store.tabs,
    };
  },
};
</script>
