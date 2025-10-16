<script setup lang="ts">
import { computed } from "vue";

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';

const props = withDefaults(defineProps<{
  as?: HeadingTag,
}>(), {
  as: 'p',
});
</script>

<template>
  <component :is="as" class="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
    <slot />
  </component>
</template>