<script setup>

import Navigation from "@/components/Navigation.vue";
import {ref} from "vue";
import AboutUs from "@/components/sections/AboutUs.vue";
import Services from "@/components/sections/Services.vue";
import Bento from "@/components/sections/Bento.vue";
import Contact from "@/components/sections/Contact.vue";

const heroTextArray = ['Bold moves.', 'Smart results.', 'That’s <span class="font-bold tracking-tighter">BEBOLDR</span>.'];
const currentIndex = ref(0);
const prevIndex = ref(0);
const started = ref(false);
let waitTicks = 0;

let i = 0;

setInterval(() => {
  if(waitTicks > 0) {
    waitTicks--;
    return;
  }

  prevIndex.value = currentIndex.value;
  currentIndex.value = i % heroTextArray.length;
  i++;

  if(currentIndex.value === heroTextArray.length-1) {
    waitTicks = 2;
  }

  started.value = true;
}, 1000);

</script>

<template>
  <main class="relative">
    <div class="bg-gray-100 pt-2">
      <div class="relative overflow-hidden pt-68 pb-24 md:pb-40 bg-white rounded-4xl mx-2">

        <div class="relative container mx-auto px-4 sm:px-6">
          <h1 class="h-28 relative font-display text-6xl/[0.9] text-center font-medium tracking-tight text-balance sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            <template v-if="started">
              <span v-for="(text, index) in heroTextArray" :key="text" class="block absolute top-0 inset-x-0 text-center transition-all ease-in-out duration-120" :class="{
                'opacity-100 -translate-y-1/2': index === currentIndex,
                '-translate-y-16 sm:-translate-y-24 md:-translate-y-32 opacity-0': index === prevIndex && prevIndex !== currentIndex,
                'translate-y-8 opacity-0': index !== currentIndex && index !== prevIndex
              }" v-html="text" />
            </template>
            <template v-else>
              <span class="block absolute top-0 inset-x-0 text-center -translate-y-1/2"><span class="tracking-tighter font-bold">BEBOLDR</span> Agency</span>
            </template>
          </h1>

          <p class="mt-8 max-w-2xl text-xl/7 text-gray-950/75 sm:text-2xl/8 text-center mx-auto"><span class="font-bold tracking-tighter">BEBOLDR</span> helps you sell more with data-driven online advertising, website audits, and conversion rate optimization</p>

          <div class="flex justify-center items-center mt-24 gap-12 text-lg">
            <a class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-400 text-primary-900 font-bold whitespace-nowrap hover:bg-primary-500 transition-all" href="#contact">Contact us</a>
            <a class="inline-flex items-center justify-center px-1 py-0.25 border-b-2 border-primary-900 text-primary-900 font-medium whitespace-nowrap hover:border-primary-950 hover:text-primary-950" href="#services">Our services</a>
          </div>
        </div>
      </div>

      <div id="services">
        <Services />
      </div>

      <div class="container mx-auto mt-24 pb-12 md:pb-24">
        <Bento />
      </div>
    </div>

    <AboutUs id="about" class="mt-12 md:mt-2" />

    <Contact id="contact" class="mt-2" />

    <Navigation />
  </main>
</template>
