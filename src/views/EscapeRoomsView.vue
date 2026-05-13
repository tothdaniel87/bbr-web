<script setup>

import {ref} from "vue";
import AboutUs from "@/components/sections/AboutUs.vue";
import Bento from "@/components/sections/Bento.vue";
import Contact from "@/components/sections/Contact.vue";
import NavigationLight from "@/components/NavigationLight.vue";
import ErServices from "@/components/sections/ErServices.vue";
import FaqItem from "@/components/FaqItem.vue";
import Title from "@/components/Title.vue";
import Lead from "@/components/Lead.vue";

</script>

<template>
  <main class="relative">
    <div class="bg-dark text-white py-2">
      <div class="relative overflow-hidden pt-68 pb-24 md:pb-40 bg-darker rounded-4xl mx-2">

        <div class="relative container mx-auto px-4 sm:px-6">
          <h1 class="h-28 relative font-display text-6xl/[0.9] text-center font-medium tracking-tight text-balance sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            <span class="block absolute top-0 inset-x-0 text-center -translate-y-1/2"><span class="tracking-tighter font-bold">Escape Room</span><br>Marketing</span>
          </h1>

          <p class="mt-8 max-w-2xl text-xl/7 text-white/75 sm:text-2xl/8 text-center mx-auto"><span class="font-bold tracking-tighter">BEBOLDR</span> helps escape rooms generate more bookings with data-driven advertising, conversion-focused websites, and measurable growth strategies</p>

          <div class="flex justify-center items-center mt-24 gap-12 text-lg">
            <a class="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-400 text-primary-900 font-bold whitespace-nowrap hover:bg-primary-500 transition-all" href="#contact">Contact us</a>
            <a class="inline-flex items-center justify-center px-1 py-0.25 border-b-2 border-primary-300 text-primary-300 font-medium whitespace-nowrap hover:border-primary-200 hover:text-primary-200" href="#services">Our services</a>
          </div>
        </div>
      </div>

    </div>

    <div id="services">
      <ErServices />
    </div>

    <AboutUs id="about" class="mt-12 md:mt-2" />

    <div class="container mx-auto mt-24 pb-12 md:pb-24">
      <Bento />
    </div>

    <div class="bg-dark text-white p-2 dark">
      <div class="bg-darker rounded-4xl">
        <div class="container mx-auto py-16 px-6">
          <div class="">
            <Title as="h2" :level="1">Challenges we help solve</Title>
            <Lead></Lead>
          </div>
          <FaqItem>
            <template #title>“Our ads used to work better.”</template>
            Campaign fatigue, outdated targeting, changing player behaviour, rising ad costs.
            Performance marketing needs continuous optimisation.
          </FaqItem>
          <FaqItem>
            <template #title>“We’re too busy to focus on marketing”</template>
            Most owners are balancing staffing, operations, maintenance, and customer experience.
            Marketing often becomes reactive instead of strategic.
          </FaqItem>
          <FaqItem>
            <template #title>“Our website looks outdated.”</template>
            Modern players judge trust and quality within seconds. Your website should support bookings,
            not create friction.
          </FaqItem>
          <FaqItem>
            <template #title>“We don’t know where our bookings are coming from.”</template>
            Without proper tracking and attribution, it’s difficult to know which campaigns are actually
            generating your revenue and bookings.
          </FaqItem>
        </div>
      </div>
    </div>

    <Contact id="contact" class="" />

    <NavigationLight />
  </main>
</template>
