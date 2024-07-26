import { createApp } from 'vue'
// import App from './App.vue'
import CategoryPage from './views/CategoryPage.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './routers/index.js'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js' 


createApp(CategoryPage).use(router).use(bootstrap).mount('#app')