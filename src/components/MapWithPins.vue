<script setup lang="ts">

import MapPin from "@/components/MapPin.vue";

//Delay base: +5ms for every step in distance
const pins = [
    '-translate-x-36 -translate-y-10 delay-185', //37
    '-translate-x-40 -translate-y-6 delay-200', //40
    '-translate-x-54 -translate-y-5 delay-270', //54

    '-translate-x-28 translate-y-16 delay-160', //32

    '-translate-x-8 -translate-y-10 delay-65', //13
    '-translate-x-7 -translate-y-16 delay-85', //17
    '-translate-x-1 -translate-y-12 delay-60', //12

    'translate-x-16 -translate-y-1 delay-80', //16

    'translate-x-38 translate-y-8 delay-195', //39

    'translate-x-59 translate-y-22 delay-315', //63
];

</script>

<template>
  <div class="h-80 bg-[url(/src/assets/worldmap.webp)] bg-center bg-size-[600px_400px] bg-no-repeat transition-all"></div>

  <MapPin v-for="pin in pins" :class="pin" />
</template>

<style scoped>

</style>