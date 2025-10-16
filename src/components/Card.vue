<script setup lang="ts">
const props = defineProps<{
  bgClass?: string
}>()

</script>

<template>
  <div :class="[
    'group relative flex flex-col overflow-hidden rounded-lg shadow-xs ring-1 ring-black/5 dark:ring-white/15',
    bgClass ?? 'bg-white dark:bg-gray-800'
  ]">
  <div class="relative h-80 shrink-0 overflow-hidden">
      <slot name="top" />
    </div>
    <div class="relative px-6 sm:px-10 py-8 sm:py-10">
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped>

</style>