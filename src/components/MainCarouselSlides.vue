<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    slideNum: Number,
});

const customClass = ref("w-screen h-screen flex justify-center items-center text-center ");

switch (props.slideNum) {
    case 0:
        customClass.value = customClass.value + "bg-slide0";
        break;
    case 1:
        customClass.value = customClass.value + "bg-slide1";
        break;
    case 2:
        customClass.value = customClass.value + "bg-slide2";
        break;
}    
</script>

<template>
    <section :class="customClass" id="slide1">
        <div v-if="slideNum == 0" id="content1" class="mt-20">

            <h1 class="text-4xl md:text-5xl text-white font-semibold mb-20">
                Benvenuti nel sito di Belvedere Colle Mattia
            </h1>

            <div class="flex justify-center items-center gap-5">
                <a href="https://www.airbnb.com/h/stanzebelvederecollemattia" class="p-3 social-bg" target="_blank">
                    <img src="/icons/airbnb.webp" class="w-16" alt="airbnb">
                </a>

                <a href="https://www.instagram.com/belvedere_collemattia/" class="p-3 social-bg" target="_blank">
                    <img src="/icons/instagram.webp" class="w-16" alt="instagram">
                </a>

                <a href="https://www.facebook.com/belvederecollemattia" class="p-3 social-bg" target="_blank">
                    <img src="/icons/facebook.webp" class="w-16" alt="facebook">
                </a>
            </div>

        </div>
        <div v-if="slideNum == 1" class="mt-14">
            <h1 class="text-3xl md:text-5xl text-wrap text-white font-semibold mb-10"> Location per eventi, feste e pernottamento <br/> tra vigneti e ulivi sotto i Castelli Romani </h1>

            <RouterLink to="/contacts" class="bg-green-600 hover:bg-green-800 transition-colors p-3 rounded-full text-white">
                Contatti
            </RouterLink>
        </div>

        <div v-if="slideNum == 2" class="mt-20">
            <h1 class="text-3xl md:text-5xl text-wrap text-white font-semibold mb-10"> I nostri ospiti amano la location ❤️🌳 </h1>

            <RouterLink to="/gallery" class="bg-green-600 hover:bg-green-800 transition-colors p-3 rounded-full text-white">
                Gallery
            </RouterLink>
        </div>
    </section>
</template>