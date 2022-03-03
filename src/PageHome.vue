<template>
  <div class="py-10">
    <div class="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <a
          href="https://www.twitter.com/arpowers"
          class="text-base md:text-xl font-semibold tracking-wide hover:text-primary-800"
        >
          @arpowers
        </a>
        <p
          class="mt-3 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight"
        >
          The best way to predict the future, is to create it.
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-700">
          Andrew Powers is an entrepreneur, investor focused on innovative ideas
          in AI, data, and customer experience.
        </p>

        <div class="text-center mt-8">
          <ElAvatar
            email="arpowers@gmail.com"
            class="w-16 h-16 rounded-full inline-block"
          ></ElAvatar>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ElAvatar from "@factor/ui/ElAvatar.vue"
</script>
