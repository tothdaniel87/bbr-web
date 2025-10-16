<script setup lang="ts">

</script>

<template>
  <div class="group">
    <div v-if="$slots.icon" class="inline-block rounded-full p-6 bg-white/40 text-primary-950 mb-4 group-hover:bg-white/80 group-hover:shadow-lg transition-all"><slot name="icon" /></div>
    <h3 class="text-lg font-medium tracking-tight text-primary-950"><slot name="title" /></h3>
    <p class="text-primary-800 mt-2"><slot/></p>
  </div>
</template>

<style scoped>

</style>