import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';
import HomeView from './pages/HomeView.vue';
import SpotifyAuthRedirect from './pages/SpotifyAuthRedirect.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import SignUpView from './pages/SignUp.vue';
import LoginView from './pages/Login.vue';


const routes = [
    { path: '/', component: HomeView },
    { path: '/signup', component: SignUpView },
    { path: '/login', component: LoginView },
    { path: '/auth/callback', component: SpotifyAuthRedirect}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,  
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        console.log("Scrolling to ", to.hash, " from " , from.hash);
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }
      return { top: 0 };
    },
  });

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')