<script setup>

import Logo from "@/components/Logo.vue";
import {ref} from "vue";
import {MenuIcon} from "lucide-vue-next";

const open = ref(false);

const nav = ref([
  { name: 'Services', href: '#services' },
  { name: 'About us', href: '#about' },
  { name: 'Contact', href: '#contact', highlight: true },
]);

</script>

<template>
  <nav class="absolute inset-x-0 top-0">
    <div class="flex flex-wrap justify-between items-center container mx-auto pt-6 px-8 md:px-6 md:pt-12">
      <div class="flex items-center">
        <div class="overflow-hidden rounded-sm">
          <Logo class="w-8 h-8" />
        </div>
        <div class="ml-2 font-bold text-xl tracking-tighter leading-none mt-px">BEBOLDR</div>
      </div>

      <div class="md:hidden pt-2">
        <button type="button" class="focus:outline-none" @click="open = !open">
          <MenuIcon class="w-8 h-8" />
        </button>
      </div>

      <div class="hidden md:flex gap-4 font-medium leading-none">
        <a v-for="item in nav" :href="item.href" :class="[
            item.highlight ? 'rounded-full bg-primary-400 text-primary-900 hover:bg-primary-500' : 'hover:underline',
            'px-4 py-2'
        ]">{{ item.name }}</a>
      </div>
    </div>

    <div v-if="open" class="flex flex-col md:hidden bg-white text-right rounded-b-xl shadow-lg py-4 px-4 mx-2">
      <a v-for="item in nav" :href="item.href" :class="[
            item.highlight ? 'text-primary-400 hover:text-primary-500' : '',
            'px-4 py-2 hover:underline font-bold'
        ]" @click="open = false">{{ item.name }}</a>
    </div>
  </nav>
</template>
