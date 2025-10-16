<script setup lang="ts">

import {ref} from "vue";
import { ChartPieIcon, FunnelIcon, ChartBarIcon } from 'lucide-vue-next';

const stats = ref([]);

function randomize() {
  stats.value = [];
  for (let i = 0; i < 8; i++) {
    stats.value.push([Math.floor(Math.random() * 30)+50, Math.floor(Math.random() * 80)+20]);
  }
}

randomize();

setInterval(() => {
  randomize();
}, 2000);

</script>

<template>
  <div class="">
    <div class="flex justify-between mb-2">
      <div class="h-6 bg-gray-200 rounded-full w-42 sm:w-56"></div>
      <div class="flex gap-2">
        <FunnelIcon class="h-6 w-6 p-1 rounded-full bg-gray-100 text-gray-400" />
        <div class="rounded-full bg-gray-100 text-gray-400 px-2">
          <ChartBarIcon class="inline-block h-6 w-6 p-1" />
          <ChartPieIcon class="inline-block h-6 w-6 p-1" />
        </div>
      </div>
    </div>

    <div v-for="(value, index) in stats" :key="index" class="flex gap-4 divide-x divide-gray-200 items-center">
      <div class="w-32 sm:w-50 py-2">
        <div class="h-4 bg-gray-200 rounded-full transition-all" :style="{width: value[0] + '%', opacity: (Math.floor(Math.random() * 50) + 50) / 100}"></div>
      </div>
      <div class="flex-1 py-2">
        <div class="h-2 bg-primary-500 rounded-full transition-all" :style="{width: value[1] + '%', opacity: (Math.floor(Math.random() * 50) + 50) / 100}"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>