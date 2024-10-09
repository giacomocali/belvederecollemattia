<script setup>
defineProps({
    label: String,
    image: String,
    alt: String,
});
</script>

<template>
    <div class="text-xl text-white flex items-center my-2">
        <img :src="image" class="w-12 mr-4" :alt="alt">
        {{ label }}       
    </div>
</template>