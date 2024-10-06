<script setup>
defineProps({
    author: String,
    body: String,
    link: String,
});
</script>

<template>
    <div class="bg-white rounded-3xl p-10 w-fit shadow-2xl">
        <div class="w-full flex justify-between items-center">
            <h1 class="text-2xl"> {{ author }} </h1>
            <img src="/icons/stars.png" class="w-40" alt="stelle recensioni">
        </div>

        <p class="text-lg italic mb-8 text-wrap"> "{{ body }}"" </p>

        <a :href={link} target="_blank" class="bg-blue-600 text-white rounded-2xl p-4"> Recensione </a>
    </div>
</template>