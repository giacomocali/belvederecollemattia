<script setup>
import spotlight from "spotlight.js";

import { ref } from 'vue';
import { sources } from '../photoSources';

const selectedCategory = ref('esterni');
const pictures = ref(sources[selectedCategory]);

function setCategory(category) {
    selectedCategory.value = category;
    pictures.value = sources[category];
}
</script>
<template>
    <Navbar />
    <section class="gallery-bg w-screen">
        <div class="w-full pt-36">
            <p class="text-center text-white text-5xl mb-3"> Galleria foto</p>
            <hr class="w-1/4 border-white border-2 mx-auto mb-6">

            <div class="w-full flex justify-center items-center text-white pb-10">
                <button @click="setCategory('esterni')"
                    class="bg-green-500 shadow-2xl shadow-green-300 px-3 p-2 rounded-l-3xl">
                    Esterni
                </button>
                <button @click="setCategory('eventi')" class="bg-white px-3 p-2 text-green-500">
                    Eventi
                </button>
                <button @click="setCategory('camere')" class="bg-white px-3 p-2 text-green-500">
                    Camere
                </button>
                <button @click="setCategory('sale')" class="bg-white px-3 p-2 text-green-500 rounded-r-3xl">
                    Sale per eventi
                </button>
            </div>

            <article class="grid grid-cols-3 gap-5 mx-10">
                <div v-for="(image, index) in pictures" :key="index">
                    <a class="spotlight" :href="image" data-title="false">
                        <img :src="image" alt="foto" class="w-fit border-white border-2 rounded-3xl">
                    </a>
                </div>
            </article>

        </div>
    </section>
    <Footer />
</template>