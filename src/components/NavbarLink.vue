<script setup>
 defineProps({
    label: String,
    link: String,
 });
</script>

<template>
    <a :href="link" class="hover:text-lime-700 hover:bg-white hover:bg-opacity-50 rounded-3xl px-3 py-2 hover:font-bold hover:scale-110 active:scale-90 duration-75 transition-all"> {{ label }} </a>
</template>