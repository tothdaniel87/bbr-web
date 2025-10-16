<script setup lang="ts">

import Title from "@/components/Title.vue";
import PreTitle from "@/components/PreTitle.vue";
import Logo from "@/components/Logo.vue";
</script>

<template>
  <div class="bg-gray-100 pt-2">
    <div class="relative overflow-hidden pt-36 pb-40 bg-white rounded-4xl mx-2">
      <div class="relative container mx-auto">
        <div class="text-center">
          <PreTitle>Contact</PreTitle>
          <Title as="h2" level="1" class="mt-4">
            Take the bold step. Reach out today.
          </Title>
        </div>

        <div class="mt-36 grid sm:grid-cols-2 gap-12 max-w-2xl mx-auto items-center px-4 sm:px-6">
          <address class="block not-italic text-center sm:text-left mb-24 sm:mb-0">
            <p class="text-xl font-bold"><span class="tracking-tighter">BEBOLDR</span> Agency</p>
            <p class="mt-4">BEBOLDR Ltd.<br>
              Hungary</p>
            <p class="mt-4 text-base/8">
              <a href="mailto:hello@beboldr.agency" class="text-primary-800 hover:text-primary-900 underline">hello@beboldr.agency</a><br>
              <a href="https://beboldr.agency" class="text-primary-800 hover:text-primary-900 underline">https://beboldr.agency</a>
            </p>
          </address>

          <div class="flex justify-center">
            <div class="overflow-hidden rounded-lg">
              <Logo class="w-40 h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 text-center text-sm/6 text-gray-500">
      © BEBOLDR Ltd. 2025
    </div>
  </div>
</template>

<style scoped>

</style>