<script setup>
import HomeCarousel from '../components/HomeCarousel.vue';
import Review from '../components/Review.vue';
</script>

<style></style>

<template>
    <Navbar />
    <HomeCarousel />
    <!-- <section class="w-screen flex justify-center gap-2 items-center">
        <img src="https://picsum.photos/800/500" class="rounded-3xl" alt="">
        <h1 class="text-5xl"> Benvenuto nel sito di Belvedere Colle Mattia </h1>
    </section> -->
    <h1 class="text-center text-4xl my-10"> Ecco cosa dicono gli ospiti che sono stati da noi: </h1>

    <div class="flex justify-center w-screen items-center">

        <Review author="Vittorio Bianchi:" body="Bel luogo per rimettersi in pace con se stessi e gli altri. Non lontano di Via Casilina." link="https://maps.app.goo.gl/deEHG9zUKzY3j7fPA" />
    </div>
</template>