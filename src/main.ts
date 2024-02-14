import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

createApp(App)
  .use(router)
  .mount('#app')

import '@/assets/css/flatly.min.css';
import 'bootstrap/dist/js/bootstrap.js';