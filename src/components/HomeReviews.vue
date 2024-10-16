<script setup>
import { onMounted } from 'vue';
import Review from '../components/Review.vue';
import Siema from 'siema';

onMounted(() => {
    const mySiema2 = new Siema({
        selector: '.siema2',
        perPage: 1,
        loop: true,
        threshold: 150,
        draggable: true,
    });
})

</script>

<template>
    <div class="w-full py-16 review-bg relative border-t-white border-t-4">
        <h1 class="text-center text-white text-3xl md:text-4xl mb-10">
            Ecco cosa dicono gli ospiti che sono stati da noi:
        </h1>


        <div class="siema2 pb-10">
            <Review author="Vittorio N. Della Corte"
                body="Passato un weekend con mia moglie. Posto molto tranquillo e sereno. Ottimo posto per scappare un weekend dalla città."
                link="https://maps.app.goo.gl/dYKV4KibXSWxmacw7" />
            <Review author="Vittorio Bianchi"
                body="Bel luogo per rimettersi in pace con se stessi e gli altri. Non lontano di Via Casilina."
                link="https://maps.app.goo.gl/deEHG9zUKzY3j7fPA" />
            <Review author="Amos Woo Min Galasso"
                body="Un piccolo paradiso immerso nella natura, servizio e personale perfetti in ogni aspetto. Super consigliato!!!"
                link="https://maps.app.goo.gl/udsm7GsJqgQmnGoJA" />
        </div>

        <div class="w-full flex justify-center items-center">
            <img src="/icons/arrow-down.gif" class="rotate-90 w-10" alt="freccia sinistra">
            <!-- <img src="/icons/line.webp" class="w-10" alt=""> -->
             <p class="text-white italic"> trascina </p>
            <img src="/icons/arrow-down.gif" class="-rotate-90 w-10" alt="freccia sinistra">
        </div>
    </div>
</template>