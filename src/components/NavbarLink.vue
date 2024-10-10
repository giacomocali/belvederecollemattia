<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    label: String,
    link: String,
});
</script>

<template>
    <RouterLink :to="link"
        class="hover:text-green-200 bg-white bg-opacity-0 
        hover:backdrop-blur-sm
        hover:bg-opacity-40 rounded-3xl px-3 py-2 hover:font-semibold hover:scale-110 
        active:scale-100 
        duration-75 transition-all">
        {{ label }}
    </RouterLink>
</template>