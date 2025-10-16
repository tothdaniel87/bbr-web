<script setup lang="ts">

let props = defineProps<{
  href: string,
}>();

</script>

<template>
  <a class="inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent
     bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white disabled:bg-gray-950 disabled:opacity-40 hover:bg-gray-800" :href="href"><slot /></a>
</template>
