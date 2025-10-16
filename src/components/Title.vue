<script setup lang="ts">
import { computed } from "vue";

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const props = withDefaults(defineProps<{
  as?: HeadingTag,
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: 'display' | 'xl' | 'lg' | 'md' | 'sm' | 'xs',
  unstyled?: boolean
}>(), {
  level: 1,
  //size: 'xl',
  unstyled: false
});

const tag = computed<HeadingTag>(() => {
  if (props.as) return props.as;
  const lvl = Math.min(6, Math.max(1, props.level || 1));
  return ('h' + lvl) as HeadingTag;
});

const sizeClass = computed(() => {
  if (props.unstyled) return '';

  let size = props.size;
  if(!size) {
    switch (props.level) {
      case 1: size = 'display'; break;
      case 2: size = 'xl'; break;
      case 3: size = 'lg'; break;
      case 4: size = 'md'; break;
      case 5: size = 'sm'; break;
      case 6: size = 'xs'; break;
      default: size = 'xl'; break;
    }
  }

  switch (size) {
    case 'display': return 'text-4xl font-medium tracking-tighter sm:text-6xl';
    case 'xl':      return 'text-3xl font-medium tracking-tight sm:text-5xl';
    case 'lg':      return 'text-2xl font-medium tracking-tight sm:text-4xl';
    case 'md':      return 'text-xl font-medium sm:text-2xl';
    case 'sm':      return 'text-lg font-medium sm:text-xl';
    case 'xs':      return 'text-base font-medium';
  }
});
</script>

<template>
  <component :is="tag" :class="sizeClass" v-bind="$attrs" class="text-pretty text-gray-950 dark:text-white">
    <slot />
  </component>
</template>