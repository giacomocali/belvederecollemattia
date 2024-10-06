<script setup>
 defineProps({
    label: String,
    link: String,
 });
</script>

<template>
    <a :href="link" class="hover:text-green-500 active:scale-90 duration-75 transition-all"> {{ label }} </a>
</template>