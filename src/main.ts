import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

createApp(App)
  .use(router)
  .mount('#app')

import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/flatly.min.css';
import 'bootstrap/dist/js/bootstrap.js';