import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// https://getbootstrap.com
import '@/assets/css/bootstrap.min.css';
import '@/assets/js/bootstrap.min.js';

// https://bootswatch.com/flatly/
import '@/assets/css/flatly.min.css';

createApp(App)
  .use(router)
  .mount('#app')
