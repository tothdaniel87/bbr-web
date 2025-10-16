<script setup lang="ts">

import RingWave from "@/components/RingWave.vue";
import Chart from "@/components/Chart.vue";
import PreTitle from "@/components/PreTitle.vue";
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";
import MapWithPins from "@/components/MapWithPins.vue";
import Lead from "@/components/Lead.vue";
import ChartSkeleton from "@/components/ChartSkeleton.vue";
</script>

<template>
  <div class="px-6">
    <Title as="h2" :level="2" class="">Smart strategy.<br>Measurable impact.</Title>
    <Lead>We adapt, optimize, and keep you in the loop every step of the way.</Lead>
  </div>

  <div class="mt-24 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2 px-2 sm:px-6">

    <Card class="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl">
      <template #top>
        <div class="h-80 bg-[url(/src/assets/google_ads_report.png)] bg-size-[1228px_320px] bg-no-repeat grayscale-50 group-hover:grayscale-0 group-hover:bg-size-[1535px_400px] transition-all"></div>
        <div class="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
      </template>
      <template #body>
        <PreTitle>Optimization</PreTitle>
        <Title as="h3" :level="4" class="mt-1">Optimized from Day One</Title>
        <p class="mt-2 text-sm/6 text-gray-600">When we take over an existing ad account, we immediately clean it up, restructure it, and optimize performance. You’ll see measurable improvements in key metrics within weeks.</p>
      </template>
    </Card>

    <Card class="lg:col-span-3 lg:rounded-tr-4xl">
      <template #top>
        <ChartSkeleton class="px-6 sm:px-10 py-8 sm:py-10" />
        <div class="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
      </template>
      <template #body>
        <PreTitle>Precision</PreTitle>
        <Title as="h3" :level="4" class="mt-1">Measurable to the Core</Title>
        <p class="mt-2 text-sm/6 text-gray-600">Every campaign decision is backed by real data. We implement accurate tracking across platforms, validate every metric, and ensure your performance numbers truly reflect business outcomes.</p>
      </template>
    </Card>

    <Card class="lg:col-span-2 lg:rounded-bl-4xl" :bg-class="'bg-primary-400'">
      <template #top>
        <Chart />
      </template>
      <template #body>
        <PreTitle class="dark:text-white/75">Adaptability</PreTitle>
        <Title as="h3" :level="4" class="mt-1">Always Following the Data</Title>
        <p class="mt-2 text-sm/6 text-gray-600">We constantly adjust campaigns based on live trends, audience behavior, and performance insights. Our mindset is simple: <i>follow the money, follow the results.</i></p>
      </template>
    </Card>

    <Card class="lg:col-span-2">
      <template #top>
        <div aria-hidden="true" class="relative h-full overflow-hidden">
          <div class="absolute inset-0">
            <RingWave />
            <div class="absolute inset-0 bg-linear-to-t from-white to-35%"></div>
          </div>
          <div class="absolute left-1/2 h-full w-104 -translate-x-1/2">
            <div class="absolute top-32 left-44 flex size-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
              <img src="../../assets/logo.svg" alt="" class="max-w-full max-h-full" />
            </div>

            <img alt="" src="../../assets/tiktok_256.png" style="left: 361px; top: 145px; transform: none;"
                 class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <img alt="" src="../../assets/bing_256.png" style="left: 283px; top: 22px; transform: none;"
                 class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <img alt="" src="../../assets/reddit_256.png" style="left: 256px; top: 211px; transform: none;"
                 class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <img alt="" src="../../assets/meta_256.png" style="left: 142px; top: 41px; transform: none;"
                 class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <img alt="" src="../../assets/google_ads_256.png" style="left: 37px; top: 54px; transform: none;"
                 class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <img alt="" src="../../assets/tripadvisor_256.png" style="left: 95px; top: 177px; transform: none;"
                 class="absolute size-16 rounded-full bg-white shadow-sm ring-1 ring-black/5">
          </div>
        </div>
      </template>
      <template #body>
        <PreTitle class="dark:text-white/75">Integration</PreTitle>
        <Title as="h3" :level="4" class="mt-1">Beyond a Single Platform</Title>
        <p class="mt-2 text-sm/6 text-gray-600">We manage integrated, cross-platform campaigns — from Google Ads and Meta to Bing, TikTok, Reddit, Tripadvisor, and YouTube — ensuring consistent messaging and unified tracking across all channels.</p>
      </template>
    </Card>

    <Card class="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl">
      <template #top>
        <MapWithPins />
        <div class="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
      </template>
      <template #body>
        <PreTitle class="dark:text-white/75">Reach</PreTitle>
        <Title as="h3" :level="4" class="mt-1">Global Clients</Title>
        <p class="mt-2 text-sm/6 text-gray-600">We’re based in the EU and work with clients across multiple continents and time zones. Wherever you are, our communication and reporting are always timely and transparent.</p>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>