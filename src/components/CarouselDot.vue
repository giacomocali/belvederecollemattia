<script setup>
import { onMounted, watchEffect, useTemplateRef } from 'vue';

const props = defineProps({
    active: Boolean,
    goto: Function,
    index: Number,
})

const bulletp = useTemplateRef('bulletpoint');

onMounted(() => {
    watchEffect(() => {
        switchActive();
    })

});
function switchActive() {
    if (props.active) {
        bulletp.value.classList.remove("brightness-60");
        bulletp.value.classList.add("brightness-100");
    }
    else if (!props.active) {
        bulletp.value.classList.remove("brightness-100");
        bulletp.value.classList.add("brightness-60");
    }
}

</script>

<template>
    <button @click="goto(index)" ref="bulletpoint" class="mx-2">
        <img src="/icons/circle-filled.png" class="w-4 brightness-75">
    </button>
</template>