<script setup>
import HomeCarousel from '../components/HomeCarousel.vue';
import HomeReviews from '../components/HomeReviews.vue';

import { onMounted, onBeforeUnmount } from 'vue';

window.scrollTo(0, 0);

</script>

<template>
    <Navbar />
    <HomeCarousel />
    <HomeReviews />

    <Footer />
</template>