import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from 'firebase'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vuetwitterclone/',
    name: 'Home',
    component: Home,
    //props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Messages" */ "../views/Login"),
  },
  {
    path: "/Messages",
    name: "Messages",
    component: () => import(/* webpackChunkName: "Messages" */ "../views/Messages"),
    meta: { requiresAuth: true },
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "Profile" */ "../views/Profile"),
    meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router
