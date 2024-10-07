<script setup>
import NavbarLink from "./NavbarLink.vue";

</script>

<style></style>

<template>
    <nav class="z-50 w-screen fixed flex justify-center items-center text-white gap-10 p-10 text-xl">
        <a href="/" class="satisfy text-2xl"> Belvedere Colle Mattia </a>
        <div class="flex gap-2">
            <NavbarLink label="Home" link="/" />
            <NavbarLink label="Galleria" link="/gallery" />
            <NavbarLink label="Contatti" link="/contacts" />
        </div>
    </nav>
</template>