<script setup>
import { RouterLink } from 'vue-router';
defineProps({
    label: String,
    link: String,
});
</script>

<template>
    <RouterLink :to="link"
        class="hover:text-green-700 bg-white bg-opacity-0 hover:bg-opacity-40 rounded-3xl px-3 py-2 hover:font-bold hover:scale-110 active:scale-100 duration-75 transition-all">
        {{ label }}
    </RouterLink>
</template>