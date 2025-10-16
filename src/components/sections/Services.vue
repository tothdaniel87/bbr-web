<script setup lang="ts">

import Title from "@/components/Title.vue";
import Lead from "@/components/Lead.vue";
import PlusListItem from "@/components/PlusListItem.vue";
import { ChartNoAxesCombinedIcon, ChartCandlestickIcon, MailIcon, ChartPieIcon, WebcamIcon, DatabaseIcon, HandshakeIcon } from 'lucide-vue-next';
import CtaButton from "@/components/CtaButton.vue";
import HighlightedCard from "@/components/HighlightedCard.vue";
import IconGridItem from "@/components/IconGridItem.vue";
</script>

<template>
  <div class="container mx-auto pt-32 px-6">
    <div class="">
      <Title as="h2" :level="1">Services that help you sell more</Title>
      <Lead>Your brand deserves more than average results. With data-driven marketing and tailored strategies, we help you scale smarter and faster.</Lead>
    </div>
  </div>

  <div class="relative py-24">
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
          <Title as="h2" :level="2" class="mt-24">Your growth, powered by partnership</Title>
          <Lead>Our process is designed to keep you informed, involved, and always moving toward measurable success.</Lead>

          <div class="mt-24 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <IconGridItem>
              <template #icon><ChartPieIcon class="w-8 h-8" /></template>
              <template #title>Transparent Performance Reports</template>
              Monthly reports with clear insights into ad performance, spend efficiency, and ROI.
            </IconGridItem>
            <IconGridItem>
              <template #icon><WebcamIcon class="w-8 h-8" /></template>
              <template #title>Ongoing Strategy Sessions</template>
              Regular consultations to review results, share new campaign ideas, and adjust strategies.
            </IconGridItem>
            <IconGridItem>
              <template #icon><DatabaseIcon class="w-8 h-8" /></template>
              <template #title>Data That Matters</template>
              We track and calculate key business KPIs such as ROAS, customer lifetime value, and returning customer ratios.
            </IconGridItem>
            <IconGridItem>
              <template #icon><HandshakeIcon class="w-8 h-8" /></template>
              <template #title>Proactive Partnership</template>
              Expect new ideas, continuous optimization, and a team that’s genuinely invested in your success.
            </IconGridItem>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>