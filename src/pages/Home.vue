<script setup>
import HomeCarousel from '../components/HomeCarousel.vue';
import HomeReviews from '../components/HomeReviews.vue';

import { onMounted, onBeforeUnmount } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Use the Composition API's lifecycle hooks
onMounted(() => {
    // Initialize AOS
    AOS.init({
        duration: 1200, // Animation duration
        once: true,     // Whether animation should happen only once
    });
});

// Optional: Refresh AOS when your component gets updated
onBeforeUnmount(() => {
    AOS.refresh();
});
</script>

<template>
    <Navbar />
    <HomeCarousel />

    <HomeReviews />
    <Footer />
</template>