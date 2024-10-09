<script setup>
defineProps({
    author: String,
    body: String,
    link: String,
});
</script>

<template>
    <div class="bg-white bg-opacity-65 border-4 rounded-3xl p-10 w-1/4 shadow-2xl hover:scale-110 transition-transform">
        <div class="w-full flex justify-between items-center">
            <h1 class="text-2xl"> {{ author }} </h1>
            <img src="/icons/stars.png" class="w-40" alt="stelle recensioni">
        </div>

        <p class="text-lg italic mb-8 text-wrap"> "{{ body }}" </p>

        <a :href={link} target="_blank" class="bg-blue-600 hover:bg-blue-800 transition-colors text-white rounded-2xl p-4 shadow-lg shadow-blue-400"> Recensione </a>
    </div>
</template>