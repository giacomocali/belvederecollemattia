<script setup>

import { RouterView } from 'vue-router';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { onMounted, onUnmounted } from 'vue';

window.scrollTo(0, 0);

let lenis;
onMounted(() => {
  lenis = new Lenis({
    duration: 1.8
  });

  const animate = (time) => {
    lenis.raf(time);
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
})

onUnmounted(()=>{
  if(lenis){lenis.destroy();}
})

</script>


<template>
  <main class="inter overflow-x-hidden">
    <RouterView />
  </main>
</template>
