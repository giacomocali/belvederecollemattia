<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';

import anime from 'animejs';
import Siema from 'siema';

import CarouselDot from './CarouselDot.vue';
import MainCarouselSlides from './MainCarouselSlides.vue';

const curSlide = ref(0);
const dots = ref([]);
dots.value.push(
  { id: crypto.randomUUID(), active: true },
  { id: crypto.randomUUID(), active: false },
  { id: crypto.randomUUID(), active: false },
);


var siemaObj;

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

  const mySiema = new Siema({
    selector: '.siema',
    perPage: 1,
    loop: true,
    threshold: 150,
    draggable: true,
    onChange: () => {
      curSlide.value = mySiema.currentSlide;

      changeActiveDot();
    }
  });

  siemaObj = mySiema;
});

function goToSlide(index){
  siemaObj.goTo(index);
}

function changeActiveDot() {
  for (let i = 0; i < dots.value.length; i++) {
    if (i == curSlide.value) {
      dots.value[i].active = true;
    }
    else {
      dots.value[i].active = false;
    }
  }

}
</script>

<template>
  <div class="siema">
      <MainCarouselSlides :slideNum="0"/>
      <MainCarouselSlides :slideNum="1"/>
      <MainCarouselSlides :slideNum="2"/>
  </div>

  <ul class="absolute bottom-10 w-screen flex items-center justify-center">
    <div class="bg-black backdrop-blur-sm bg-opacity-30 p-3 flex justify-center items-center rounded-3xl">

      <div v-for="(dot, index) in dots" v-bind:key="dot.id">
        <CarouselDot :active="dot.active" :goto="goToSlide" :index="index" />
      </div>

    </div>
  </ul>

</template>
