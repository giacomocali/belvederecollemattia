import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Gallery from "./pages/Gallery.vue";
import Contacts from "./pages/Contacts.vue";
import NotFound from "./pages/NotFound.vue";    

const routes = [
  { path: "/", component: Home },
  { path: "/gallery", component: Gallery },
  { path: "/contacts", component: Contacts },
  {
    path: "/:catchAll(.*)", // Catch-all route (Vue 3)
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component("Navbar", Navbar);
app.component("Footer", Footer);
app.mount("#app");
