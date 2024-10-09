<script setup>
import spotlight from "spotlight.js";

import { onMounted, ref } from 'vue';
import { sources } from '../photoSources';

window.scrollTo(0, 0);

const selectedCategory = ref('esterni');
const pictures = ref(sources[selectedCategory.value]);

var esterni, eventi, camere, sale;

onMounted(()=>{
    assignButtons();    
});

function assignButtons() {
    esterni = document.getElementById("esterni");
    eventi = document.querySelector('#eventi');
    camere = document.querySelector('#camere');
    sale = document.querySelector('#sale');
}


function setCategory(category) {

    selectedCategory.value = category;
    pictures.value = sources[category]

    switch (category) {
        case "esterni":
            active(esterni);
            notActive([eventi, camere, sale]);
            break;
        case "eventi":
            active(eventi);
            notActive([esterni, camere, sale]);
            break;
        case "camere":
            active(camere);
            notActive([esterni, eventi, sale]);
            break;
        case "sale":
            active(sale);
            notActive([esterni, eventi, camere]);
            break;

    }
}

function active(obj) {
    obj.classList.remove("bg-white", "text-green-500");
    obj.classList.add("bg-green-500", "shadow-lg");
}

function notActive(objs) {
    for (let i = 0; i < objs.length; i++) {
        objs[i].classList.remove("bg-green-500", "shadow-lg");
        objs[i].classList.add("bg-white", "text-green-500");
    }
}

</script>

<template>
    <Navbar />
    <section class="gallery-bg w-screen">
        <div class="w-full pt-44">
            <p class="text-center text-white text-5xl mb-3"> Galleria foto</p>
            <hr class="w-1/4 border-white border-2 mx-auto mb-6">

            <div class="w-full flex justify-center items-center text-white pb-10">

                <button @click="setCategory('esterni')" id="esterni"
                    class="bg-green-500 shadow-lg shadow-green-300 px-3 p-2 rounded-l-3xl ">
                    Esterni
                </button>

                <button @click="setCategory('eventi')" id="eventi" class="bg-white px-3 p-2 text-green-500 shadow-green-300 ">
                    Eventi
                </button>

                <button @click="setCategory('camere')" id="camere" class="bg-white px-3 p-2 text-green-500 shadow-green-300 ">
                    Camere
                </button>

                <button @click="setCategory('sale')" id="sale" class="bg-white px-3 p-2 text-green-500 rounded-r-3xl shadow-green-300 ">
                    Sale per eventi
                </button>
            </div>

            <article class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mx-5 md:mx-10">
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