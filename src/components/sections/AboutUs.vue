<script setup lang="ts">
import Title from "@/components/Title.vue";
import Lead from "@/components/Lead.vue";
import PreTitle from "@/components/PreTitle.vue";
import HighlightedCard from "@/components/HighlightedCard.vue";
import PersonCard from "@/components/PersonCard.vue";

import ZoliSrc from "../../assets/Zoli_Beboldr_Agency.webp";
import DaniSrc from "../../assets/Daniel_Beboldr_Agency.webp";

</script>

<template>
  <div class="dark mx-2 pt-24 pb-4 md:pt-32 sm:pb-24 md:pb-32 rounded-4xl ring-1 ring-black/5 ring-inset bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="">
        <PreTitle>About us</PreTitle>
        <Title as="h2" :level="1" class="mt-2">Meet the Founders</Title>
      </div>

      <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        <div class="sm:col-span-2">
          <div class="max-w-xl">
            <Lead>At <span class="tracking-tighter font-bold text-primary-500">BEBOLDR</span>, we believe success starts with understanding: your business, your audience, and your growth potential.</Lead>
            <p class="dark:text-white/75 mt-12">
              With over 10 years of experience each in digital marketing strategy, performance optimization, and team leadership, we founded BEBOLDR with a clear vision:
              to build an agency that truly understands both the technical side of marketing and the business challenges behind it.
            </p>
            <p class="dark:text-white/75 mt-12">
              We know what it’s like to juggle budgets, goals, and expectations — because we’ve been in those roles ourselves.
              That’s why we don’t just execute marketing tasks; we think alongside you, helping you define goals, build strategies around them, and deliver measurable outcomes.
            </p>
            <p class="dark:text-white/75 mt-12">
              From planning to execution, we’re your partners in building a smarter, bolder digital presence.
            </p>
          </div>
        </div>
        <PersonCard class="mt-12 sm:mt-0" :src="ZoliSrc" alt="Zoli Papp, Co-Founder of BEBOLDR">
          <strong>Zoli Papp</strong><br>
          <i>Co-Founder</i>
          <template #more>
            10+ years of escape room industry XP
          </template>
        </PersonCard>
        <PersonCard class="mt-8 sm:mt-0" :src="DaniSrc" alt="Daniel Toth, Co-Founder of BEBOLDR">
          <strong>Daniel Toth</strong><br>
          <i>Co-Founder</i>
          <template #more>
            10+ years of online marketing XP
          </template>
        </PersonCard>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>