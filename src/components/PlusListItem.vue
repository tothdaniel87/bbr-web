<script setup lang="ts">

</script>

<template>
  <li class="flex items-center gap-4 text-sm/5 text-gray-950/75 data-disabled:text-gray-950/25">
    <span class="inline-flex h-6 items-center">
      <svg viewBox="0 0 15 15" aria-hidden="true" class="size-3.75 shrink-0 fill-gray-950/25">
        <path clip-rule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"></path>
      </svg>
    </span>
    <slot />
  </li>
</template>

<style scoped>

</style>