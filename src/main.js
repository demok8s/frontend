
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; // Import the styles
import VueCookies from 'vue3-cookies';


const app = createApp(App)

app.use(router)
app.use(Vue3Toastify, {
    autoClose: 3600, // Optional: Set default auto-close duration (in milliseconds)
    position: "bottom-center",
  });
app.use(VueCookies)
app.mount('#app')
