<script setup>
import ContactInfo from '../components/ContactInfo.vue';
window.scrollTo(0, 0);
</script>

<template>
    <Navbar />
    <section class="gallery-bg w-screen">
        <h1 class="text-5xl text-white text-center w-full pt-44 mb-3">
            Contattaci
        </h1>
        <hr class="w-1/4 border-white border-2 mx-auto mb-16">
        <article class="grid grid-cols-1 md:grid-cols-2 mb-40 md:mb-60">

            <div class="w-full flex justify-center">

                <div class="bg-white bg-opacity-40 backdrop-blur p-5 
                rounded-3xl px-10 mx-auto mb-10 md:mb-0">
                    <ContactInfo image="/icons/email3.png" alt="email" label="belvederecollemattia@gmail.com" />
                    <ContactInfo image="/icons/phone.png" alt="telefono" label="+39 320 305 9981" />
                    <ContactInfo image="/icons/location3.png" alt="indirizzo"
                        label="Via di Colle Mattia 131 00132 Roma (RM)" />
                    <br>

                    <hr class="w-1/4 border-white border-2 mx-auto mb-10">

                    <div class="w-full flex justify-center items-center gap-5">
                        <a href="https://www.airbnb.com/h/stanzebelvederecollemattia">
                            <img src="/icons/airbnb.webp" alt="airbnb" class="w-28">
                        </a>
                        <a href="https://www.instagram.com/belvedere_collemattia/">
                            <img src="/icons/instagram.webp" alt="instagram" class="w-28">
                        </a>
                        <a href="https://www.facebook.com/belvederecollemattia">
                            <img src="/icons/facebook.webp" alt=facebook class="w-28">
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <iframe class="rounded-3xl border-4 border-dashed mx-auto loading-bg w-full md:w-2/3 h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5944.622639223042!2d12.727527448469294!3d41.84311755013052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f7f5279bc1139%3A0x81d8052360a0a67a!2sBelvedere%20Colle%20Mattia!5e0!3m2!1sit!2sit!4v1728478782481!5m2!1sit!2sit"
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </article>
        <Footer />
    </section>
</template>