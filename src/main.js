import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from './router'
import { auth } from 'firebase'
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})