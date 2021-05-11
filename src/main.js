import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    currentUser: '',
    currentUserName: '',
  },
  mounted() {
    if (localStorage.currentUser) {
      this.currentUser = localStorage.currentUser;
    }
    if (localStorage.currentUserName) {
      this.currentUserName = localStorage.currentUserName;
    }
  },
  methods: {
    persist() {
      localStorage.currentUser = this.currentUser;
      localStorage.currentUserName = this.currentUserName;
    }
  },
  render: h => h(App)
}).$mount("#app");
