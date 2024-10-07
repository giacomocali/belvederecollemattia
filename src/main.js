import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import Navbar from "./components/Navbar.vue";
import Footer from './components/Footer.vue';

const app = createApp(App); 
app.component('Navbar', Navbar);
app.component('Footer', Footer);
app.mount('#app');
