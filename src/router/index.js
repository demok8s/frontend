import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import HomeView from "@/views/HomeView.vue";
const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPasswordView',
    component: ForgotPasswordView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  // Add other routes as needed
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guard to handle route redirection based on token
router.beforeEach((to, from, next) => {
  const { cookies } = useCookies();
  const token = cookies.get('token'); // Replace with your actual token cookie name
  console.log(token)
  const restrictedRoutes = ['/login', '/register', '/forgotpassword'];

  if (restrictedRoutes.includes(to.path) && token) {
    router.push('/') // Redirect to home route if token is set and trying to access restricted routes
  } else {
    next(); // Otherwise, continue with the navigation
  }
});

export default router
