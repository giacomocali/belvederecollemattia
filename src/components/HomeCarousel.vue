<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref, nextTick } from 'vue';
import Glide from '@glidejs/glide';

const glide = ref(null);
const activeSlide = ref(0);
const totalSlides = ref(3);

import anime from 'animejs';

onMounted(() => {
  anime({
    targets: '#slide1',
    translateY: ['20%', '0%'],
    easing: 'easeOutCubic',
  });
  anime({
    targets: '#content1',
    translateY: ['30%', '0%'],
    opacity: [0, 1],
    easing: 'easeOutCubic',
  });

  nextTick(() => {
    glide.value = new Glide('.glide', {
      type: 'carousel',
      autoplay: 4000,
      perView: 1,
      gap: 0,
    });

    // Listen for slide change events
    glide.value.on('run', () => {
      activeSlide.value = glide.value.index;  // Update the active slide
    });

    glide.value.mount();

    // Update total slides dynamically (if needed)
    totalSlides.value = document.querySelectorAll('.glide__slide').length;
  });
});


</script>

<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides text-white">


        <li class="glide__slide" id="slide1">
          <img src="/images/image13.webp" class="brightness-75" alt="foto" />

          <div class="absolute z-10" id="content1">

            <p class="text-center text-4xl md:text-5xl font-semibold my-20 md:my-32">
              Benvenuto nel sito di Belvedere Colle Mattia
            </p>

            <div class="flex justify-center items-center gap-5" id="links1">
              <a href="https://www.airbnb.com/h/stanzebelvederecollemattia" class="w-16 md:w-24 p-3 social-bg"
                target="_blank">
                <img src="/icons/airbnb.webp" alt="">
              </a>
              <a href="https://www.instagram.com/belvedere_collemattia/" class="w-16 md:w-24 p-3 social-bg"
                target="_blank">
                <img src="/icons/instagram.webp" alt="">
              </a>
              <a href="https://www.facebook.com/belvederecollemattia" class="w-16 md:w-24 p-3 social-bg"
                target="_blank">
                <img src="/icons/facebook.webp" alt="">
              </a>
            </div>

          </div>

        </li>

        <li class="glide__slide relative w-full h-full">
          <img src="/images/image7.webp" class="brightness-75" alt="foto" />

          <div class="absolute w-full h-full flex justify-center items-center flex-col z-10">

            <p class="text-center text-4xl md:text-5xl font-semibold my-10">
              Location per eventi, feste e pernottamento <br /> tra vigneti e ulivi sotto i Castelli Romani
            </p>

            <div class="flex justify-center items-center gap-5 ">
              <RouterLink to="/contacts" class="bg-green-600 hover:bg-green-700 
              transition-colors px-4 py-2 rounded-3xl text-xl">
                Contatti
              </RouterLink>
            </div>

          </div>

        </li>


        <li class="glide__slide">
          <img src="/images/image9.webp" class="brightness-75" alt="Immagine 3" />

          <div class="absolute w-full h-full flex justify-center items-center flex-col z-10">

            <p class="text-center text-4xl md:text-5xl font-semibold my-10">

              I nostri ospiti amano la location ❤️🌳

            </p>

            <div class="flex justify-center items-center gap-5 ">
              <RouterLink to="/gallery"
                class="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-3xl text-xl">
                Galleria
              </RouterLink>
            </div>

          </div>
        </li>
      </ul>
    </div>


    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<"> ‹ </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
    </div>


    <div class="slide-lines">
      <div
        v-for="(line, index) in totalSlides"
        :key="index"
        :class="['line', { active: index === activeSlide }]"
      ></div>
    </div>


  </div>
</template>


<style scoped>
.slide-lines {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.line {
  width: 30px;
  height: 5px;
  background-color: #ccc;
  transition: background-color 0.3s;
}

.line.active {
  background-color: #333;  /* Highlight the active line */
}

.glide {
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
  /* Ensure the glide container is on top */
}

.glide__track {
  height: 100%;
  position: relative;
  /* Ensure it holds the slides */
  z-index: 2;
  /* Ensure the track has a higher z-index */
}

.glide__slide {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  /* Each slide should be layered correctly */
}

.glide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 4;
  /* Make sure the images are on top */
}

.glide__arrows {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 5;
  /* Ensure arrows are on top of everything */
}

.glide__arrow {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px 20px;
  cursor: pointer;
}

.glide__arrow--left {
  left: 10px;
}

.glide__arrow--right {
  right: 10px;
}
</style>
