<template>
    <div class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides text-white">
                <li class="glide__slide">
                    <img src="https://picsum.photos/id/199/1600/900" alt="Image 1"  />
                    
                    <div class="absolute mb-40 z-10">
                        <p class="text-center text-5xl font-bold" data-aos="fade-up"> Benvenuto nel sito di Belvedere Colle Mattia </p>
                        <a href="#"></a>
                    </div>

                  </li>
                <li class="glide__slide">
                    <img src="https://picsum.photos/id/198/1600/900" alt="Image 2" />
                </li>
                <li class="glide__slide">
                    <img src="https://picsum.photos/id/190/1600/900" alt="Immagine 3" />

                </li>
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">‹</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Glide from '@glidejs/glide';

const glide = ref(null);

onMounted(() => {
    nextTick(() => {
        glide.value = new Glide('.glide', {
            type: 'carousel',
            autoplay: 3000,
            hoverpause: true,
            perView: 1,
            gap: 0,
        });
        glide.value.mount();
    });
});
</script>

<style scoped>
.glide {
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1; /* Ensure the glide container is on top */
}

.glide__track {
  height: 100%;
  position: relative; /* Ensure it holds the slides */
  z-index: 2; /* Ensure the track has a higher z-index */
}

.glide__slide {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3; /* Each slide should be layered correctly */
}

.glide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 4; /* Make sure the images are on top */
}

.glide__arrows {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 5; /* Ensure arrows are on top of everything */
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
