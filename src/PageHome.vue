<template>
  <div class="py-10">
    <div class="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <a
          href="https://www.twitter.com/arpowers"
          class="hover:text-primary-500 text-base font-semibold tracking-wide transition-all hover:scale-105 md:text-xl"
        >
          @arpowers
        </a>
        <p
          class="mt-3 text-5xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight"
        >
          Andrew Powers
        </p>
        <p class="mx-auto mt-5 max-w-xl text-xl text-slate-700">
          Andrew Powers is an entrepreneur and software developer working on
          applications of AI in business intelligence and orchestration.
          <a href="https://www.kaption.co" class="text-primary-500"
            >More &rarr;</a
          >
        </p>
        <p
          class="mx-auto mt-5 max-w-xl text-xs uppercase tracking-widest text-slate-500"
        >
          Irvine, CA &mdash; Salt Lake City, UT
        </p>

        <div class="mt-8 text-center">
          <ElAvatar
            email="arpowers@gmail.com"
            class="inline-block h-16 w-16 rounded-full"
          ></ElAvatar>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ElAvatar from "@factor/ui/ElAvatar.vue"
</script>
