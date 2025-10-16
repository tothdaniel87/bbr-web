<script setup lang="ts">
import Title from "@/components/Title.vue";

const props = withDefaults(defineProps<{
  hasPadding?: boolean
}>(), {
  hasPadding: true
});
</script>

<template>
  <div class="mx-auto w-full relative group">
    <div class="relative h-full rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden" :class="{'p-10 pb-9': hasPadding}">
      <Title v-if="$slots.title" :level="3"><slot name="title" /></Title>

      <p v-if="$slots.lead" class="mt-2 text-md/6 text-gray-950/75 text-pretty"><slot name="lead" /></p>

      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>