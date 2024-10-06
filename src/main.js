import { createApp } from 'vue'

import './style.css'
import Aos from 'aos';
Aos.init();


import App from './App.vue'
import Navbar from "./components/Navbar.vue";

const app = createApp(App); 
app.component('Navbar', Navbar);
app.mount('#app');
