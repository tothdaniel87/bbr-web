<script setup lang="ts">

import RingItem from "@/components/RingItem.vue";
</script>

<template>
  <RingItem v-for="i in 4" :key="i" :style="{'width': i*160 + 'px', 'height': i*160 + 'px', 'transition-delay': (i-1)*100 + 'ms'}" />
</template>

<style scoped>

</style>