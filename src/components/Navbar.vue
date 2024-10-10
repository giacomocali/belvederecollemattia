<script setup>
import NavbarLink from "./NavbarLink.vue";
import { RouterLink } from "vue-router";

import { ref } from "vue";
import anime from "animejs";

const isDrawerOpen = ref(false);
const drawer = ref(null);

function toggleDrawer() {
    if (!isDrawerOpen.value) {
        openDrawer();
    }
    else {
        closeDrawer();
    }
    isDrawerOpen.value = !isDrawerOpen.value;
}

function openDrawer() {
    anime({
        targets: drawer.value,
        translateX: ['100%', '0%'],
        easing: 'easeOutSine',
        duration: 300,
    });
}
function closeDrawer() {
    anime({
        targets: drawer.value,
        translateX: ['0%', '100%'],
        easing: 'easeInSine',
        duration: 300,
    });
}

</script>

<style></style>

<template>
    <nav class="z-40 w-screen fixed flex md:justify-center items-center text-white gap-10 p-10 text-xl">
        <RouterLink to="/" class="satisfy text-2xl"> Belvedere Colle Mattia </RouterLink>
        <div class="hidden md:flex gap-2">
            <NavbarLink label="Home" link="/" />
            <NavbarLink label="Galleria" link="/gallery" />
            <NavbarLink label="Contatti" link="/contacts" />
        </div>

        <button @click="toggleDrawer" class="absolute right-5 md:hidden">
            <img src="/icons/menu.svg" class="w-10" alt="menu">
        </button>

        <div ref="drawer" class="fixed md:hidden 
            top-0 right-0 w-72 bg-green-950 text-white 
            h-full z-50 translate-x-full
            flex flex-col items-end text-right px-10 py-16">

            <button @click="toggleDrawer"> <img src="/icons/close.svg" class="w-14" alt="chiudi"> </button>

            <RouterLink to="/" class="text-5xl my-2"> Home </RouterLink>
            <RouterLink to="/gallery" class="text-5xl my-2"> Galleria </RouterLink>
            <RouterLink to="/contacts" class="text-5xl my-2 "> Contatti </RouterLink>
        </div>
    </nav>
</template>