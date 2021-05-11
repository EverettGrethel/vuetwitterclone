import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/vuetwitterclone/',
    name: 'Home',
    component: Home,
    //props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/Messages",
    name: "Messages",
    component: () => import(/* webpackChunkName: "Messages" */ "../views/MessagesView"),
    meta: { requiresAuth: true },
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "Profile" */ "../views/ProfileView"),
    meta: { requiresAuth: true },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/LoginView"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import(/* webpackChunkName: "Login" */ "../views/RegisterView"),
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

export default router
