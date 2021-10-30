<template>
  <div class="py-10">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <a
          href="https://www.twitter.com/arpowers"
          class="
            text-base
            md:text-xl
            font-semibold
            tracking-wide
            hover:text-primary-800
          "
        >
          @arpowers
        </a>
        <p
          class="
            mt-3
            text-4xl
            font-extrabold
            text-gray-900
            sm:text-5xl sm:tracking-tight
            lg:text-6xl
          "
        >
          The future is up to us.
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Andrew Powers is an entrepreneur and investor focused on innovative
          ideas in SpaceTech, Bioware, AI, and Data.
        </p>

        <div class="text-center mt-8">
          <ElemAvatar
            email="arpowers@gmail.com"
            class="w-16 h-16 rounded-full inline-block"
          ></ElemAvatar>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ElemAvatar from "@factor/ui/ElemAvatar.vue"
import ElemButton from "@factor/ui/ElemButton.vue"
import BlogList from "./BlogList.vue"
import { emitEvent } from "@factor/api"
</script>
