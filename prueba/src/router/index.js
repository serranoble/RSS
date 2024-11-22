import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      // Verifica si el token está en localStorage
      if (!localStorage.getItem('authToken')) {
        next('/login'); // Si no hay token, redirige al login
      } else {
        next(); // Si hay token, permite el acceso a la página home
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      // Si el usuario ya está logueado, redirige al Home
      if (localStorage.getItem('authToken')) {
        next('/'); // Redirige a Home si el usuario ya está autenticado
      } else {
        next(); // Continúa al login si no está autenticado
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      // Si el usuario ya está logueado, redirige al Home
      if (localStorage.getItem('authToken')) {
        next('/'); // Redirige a Home si el usuario ya está autenticado
      } else {
        next(); // Continúa al registro si no está autenticado
      }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
    beforeEnter: (to, from, next) => {
      // Verifica si el token está en localStorage
      if (!localStorage.getItem('authToken')) {
        next('/login'); // Si no hay token, redirige al login
      } else {
        next(); // Si hay token, permite el acceso a la página de usuario
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
