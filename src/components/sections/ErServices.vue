<script setup lang="ts">

import Title from "@/components/Title.vue";
import Lead from "@/components/Lead.vue";
import PlusListItem from "@/components/PlusListItem.vue";
import { ChartNoAxesCombinedIcon, ChartCandlestickIcon, MailIcon, SearchIcon, PodcastIcon, SettingsIcon } from 'lucide-vue-next';
import CtaButton from "@/components/CtaButton.vue";
import HighlightedCard from "@/components/HighlightedCard.vue";
import IconGridItem from "@/components/IconGridItem.vue";
</script>

<template>
  <div class="container mx-auto pt-16 md:pt-32 px-6">
    <div class="">
      <Title as="h2" :level="1">Fill More Rooms. Sell More Experiences.</Title>
      <Lead>We are not just another marketing agency. We bring over a decade of experience in both online
        and offline marketing, combined with deep operational knowledge of the <strong>escape room industry</strong>.</Lead>
    </div>
  </div>

  <div class="relative py-16 md:py-24">
    <div class="absolute inset-x-0 sm:inset-x-2 top-60 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-primary-300"></div>

    <div class="container mx-auto relative">
      <div class="px-2 sm:px-6">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <HighlightedCard>
            <template #title>Performance marketing</template>
            <template #lead>Google Ads, Meta Ads, and multi-channel campaigns with measurable ROI.</template>

            <div class="mt-8 flex items-center gap-8">
              <ChartNoAxesCombinedIcon class="h-12 w-12" />
              <p class="text-lg/6">Increase in ROAS <br>Drive more sales</p>
            </div>
            <CtaButton href="#contact" class="mt-8">Request quote</CtaButton>

            <div class="mt-8"><h3 class="text-sm/6 font-medium text-gray-950">Help you selling with:</h3>
              <ul class="mt-4 space-y-4">
                <PlusListItem>Run high-performing Google & Meta Ads</PlusListItem>
                <PlusListItem>Audit and optimize websites for maximum conversions</PlusListItem>
                <PlusListItem>Setup, test and optimize conversion tracking</PlusListItem>
                <PlusListItem>Design and build customer journeys that actually drive sales</PlusListItem>
              </ul>
            </div>
          </HighlightedCard>

          <HighlightedCard>
            <template #title>Email marketing</template>
            <template #lead>Lasting customer relationships and repeat sales with tailored email journeys.</template>

            <div class="mt-8 flex items-center gap-8">
              <MailIcon class="h-12 w-12" />
              <p class="text-lg/6">Increase in LTV<br>Optimized email funnels</p>
            </div>
            <CtaButton href="#contact" class="mt-8">Request quote</CtaButton>

            <div class="mt-8"><h3 class="text-sm/6 font-medium text-gray-950">Help you increase customer lifetime value with:</h3>
              <ul class="mt-4 space-y-4">
                <PlusListItem>Plan newsletters and campaigns</PlusListItem>
                <PlusListItem>Automate email flows</PlusListItem>
                <PlusListItem>Implement segmentation and personalization strategies</PlusListItem>
                <PlusListItem>Track and optimize email performance</PlusListItem>
              </ul>
            </div>
          </HighlightedCard>

          <HighlightedCard>
            <template #title>Marketing strategy</template>
            <template #lead>A clear roadmap that connects marketing actions to business goals.</template>

            <div class="mt-8 flex items-center gap-8">
              <ChartCandlestickIcon class="h-12 w-12" />
              <p class="text-lg/6">Measurable KPIs<br>Data-driven planning</p>
            </div>
            <CtaButton href="#contact" class="mt-8">Request quote</CtaButton>

            <div class="mt-8"><h3 class="text-sm/6 font-medium text-gray-950">Help you align marketing efforts with growth objectives with:</h3>
              <ul class="mt-4 space-y-4">
                <PlusListItem>Design customer journey and optimize UX</PlusListItem>
                <PlusListItem>Plan content and campaigns</PlusListItem>
                <PlusListItem>Analyse market and competitors</PlusListItem>
                <PlusListItem>Plan and audit conversion rate optimization roadmap</PlusListItem>
                <PlusListItem>Define KPIs and implement performance framework</PlusListItem>
              </ul>
            </div>
          </HighlightedCard>
        </div>

        <div class="px-4 sm:px-0">
          <Title as="h2" :level="2" class="mt-16 md:mt-24">How we work?</Title>
          <Lead>Having spent years building, operating and marketing escape rooms ourselves, we understand the unique
            challenges of the industry, from seasonality and customer behaviour to occupancy and long-term growth.</Lead>

          <div class="mt-16 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <IconGridItem>
              <template #icon><SearchIcon class="w-8 h-8" /></template>
              <template #title>DISCOVERY & AUDIT</template>
              We get to know your business, audience, and operational challenges while identifying what’s working,
              what’s being missed, and where opportunities exist for growth.
            </IconGridItem>
            <IconGridItem>
              <template #icon><ChartCandlestickIcon class="w-8 h-8" /></template>
              <template #title>STRATEGY</template>
              Having worked with escape rooms across multiple markets, we know that no two venues behave the
              same — every strategy is tailored to your audience, goals, and game lineup.
            </IconGridItem>
            <IconGridItem>
              <template #icon><PodcastIcon class="w-8 h-8" /></template>
              <template #title>EXECUTION</template>
              We turn strategy into measurable action through high-performing campaigns, creative content,and
              marketing systems designed to generate real bookings.
            </IconGridItem>
            <IconGridItem>
              <template #icon><SettingsIcon class="w-8 h-8" /></template>
              <template #title>OPTIMISATION</template>
              Marketing is never “set and forget.” We continuously test, refine, and adapt based on performance,
              seasonality, and changing player behaviour to keep your business growing.
            </IconGridItem>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>