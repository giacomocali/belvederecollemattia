<script setup>
defineProps({
    author: String,
    body: String,
    link: String,
});
</script>

<template>
    <div class="bg-white bg-opacity-50 backdrop-blur-md border-4 border-opacity-40 rounded-3xl 
        p-10 w-full md:w-1/2 lg:w-1/4 mx-auto shadow-2xl transition-transform text-wrap">
        <div class="w-full flex justify-between items-center">
            <h1 class="text-2xl"> {{ author }} </h1>
            <img src="/icons/stars.png" class="w-40" alt="stelle recensioni">
        </div>

        <p class="text-lg italic mb-8 text-wrap"> "{{ body }}" </p>

        <a :href="link" target="_blank" class="bg-green-600 hover:bg-green-700 hover:shadow-lg 
            transition-all text-white rounded-2xl p-4">
            Recensione
        </a>
    </div>
</template>