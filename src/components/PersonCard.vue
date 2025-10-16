<script setup lang="ts">

const props = defineProps<{
  src: string,
  alt?: string
}>();

</script>

<template>
  <div class="relative flex aspect-2/3 shrink-0 flex-col justify-end overflow-hidden rounded-3xl shadow-lg">
    <img alt="" class="absolute inset-x-0 top-0 aspect-2/3 w-full object-cover" :src="src" :alt="alt">
    <div class="absolute inset-0 rounded-3xl bg-linear-to-t from-gray-800 from-8% to-55% ring-1 ring-gray-950/10 ring-inset"></div>
    <div class="relative p-10">
      <p class="text-white text-sm"><slot name="more" /></p>
      <div class="mt-6 border-t border-white/20 pt-6">
        <p class="text-sm/6 font-medium text-white"><slot /></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>