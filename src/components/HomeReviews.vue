<script setup>
import Review from '../components/Review.vue';
</script>


<template>
    <div class="w-full py-16 review-bg relative border-t-white border-t-4">
        <h1 class="text-center text-white text-4xl mb-10"> Ecco cosa dicono gli ospiti che sono stati da noi: </h1>

        <div class="flex justify-center w-full items-center gap-10">

            <Review author="Vittorio Bianchi"
                body="Bel luogo per rimettersi in pace con se stessi e gli altri. Non lontano di Via Casilina."
                link="https://maps.app.goo.gl/deEHG9zUKzY3j7fPA" />
            <Review author="Vittorio N. Della Corte"
                body="Passato un weekend con mia moglie. Posto molto tranquillo e sereno. Ottimo posto per scappare un weekend dalla città."
                link="https://maps.app.goo.gl/deEHG9zUKzY3j7fPA" />
            <Review author="Amos Woo Min Galasso"
                body="Un piccolo paradiso immerso nella natura, servizio e personale perfetti in ogni aspetto. Super consigliato!!!"
                link="https://maps.app.goo.gl/deEHG9zUKzY3j7fPA" />
        </div>
    </div>
</template>