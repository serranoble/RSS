import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa Bootstrap JS

createApp(App).use(store).use(router).mount('#app');