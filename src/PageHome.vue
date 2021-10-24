<template>
  <div class="px-4 py-20">
    <div class="lg:grid grid-cols-12 gap-20">
      <div class="lg:col-span-6">
        <div class="mb-4 lg:mb-8">
          <div class="flex items-center mb-4">
            <ElemAvatar
              email="arpowers@gmail.com"
              class="lg:hidden w-16 h-16 mr-4 rounded-full"
            />

            <a
              href="https://www.twitter.com/arpowers"
              class="
                font-semibold
                text-lg
                lg:text-2xl
                text-primary-600
                hover:text-primary-800
              "
            >
              @arpowers</a
            >
          </div>
          <div class="my-6">
            <h1
              class="
                text-2xl
                lg:text-4xl
                font-extrabold
                tracking-tight
                leading-tight
              "
            >
              Andrew Powers
            </h1>
          </div>
        </div>
        <div class="lg:text-xl leading-relaxed space-y-4">
          <p>
            Welcome to my personal website. Here I write long-form studies on
            data-driven decision making, growth marketing, engineering, and
            philosophy. I write and deliver insights as I learn them.
          </p>
          <p>
            <span class="font-bold">About Me:</span> These days, I’m the founder
            of
            <a
              class="text-primary-500 hover:text-primary-800"
              href="https://www.darwin.so"
              >Darwin</a
            >, where I focus on building digital experience analytics. I also do
            occasional investing and micro acquisitions. Previously, I built and
            sold a web tools business which I bootstrapped to 72,000+ customers.
            I’ll share from these experiences, and more, on my newsletter.
          </p>
        </div>
        <div class="my-12 flex justify-between">
          <ElemButton
            btn="primary"
            size="lg"
            @click.stop="emitEvent('nlSignup')"
            >Get Newsletter &rarr;</ElemButton
          >
        </div>
      </div>
      <div class="img hidden lg:block lg:col-span-6">
        <img class="rounded-full" src="./img/powers-profile.webp" />
      </div>
    </div>
    <BlogList />
  </div>
</template>
<script setup lang="ts">
import ElemAvatar from "@factor/ui/ElemAvatar.vue"
import ElemButton from "@factor/ui/ElemButton.vue"
import BlogList from "./BlogList.vue"
import { emitEvent } from "@factor/api"
</script>
