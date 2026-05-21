import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import EscapeRoomsView from "../views/EscapeRoomsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EscapeRoomsView,
    },
    {
      path: '/escape-rooms',
      name: 'er',
      component: EscapeRoomsView,
    },
    {
      path: '/home',
      name: 'home2',
      component: HomeView,
    },
  ],
})

export default router
