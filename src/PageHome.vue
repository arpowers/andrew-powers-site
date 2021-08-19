<template>
  <div class="px-4 py-20">
    <div class="lg:grid grid-cols-12 gap-20">
      <div class="lg:col-span-6">
        <div class="mb-4 lg:mb-8">
          <div class="flex items-center italic mb-4">
            <ElemAvatar
              email="arpowers@gmail.com"
              class="lg:hidden w-16 h-16 mr-4 rounded-full"
            />
            <svg class="h-5 w-5 text-primary-500 mr-1" viewBox="0 0 512 512">
              <g>
                <path
                  fill="currentColor"
                  d="M256,151.704c-57.509,0-104.296,46.787-104.296,104.296S198.491,360.296,256,360.296
    			c29.867,0,56.821-12.639,75.852-32.825c19.031,20.186,45.985,32.825,75.852,32.825C465.213,360.296,512,313.509,512,256
    			C512,114.842,397.158,0,256,0S0,114.842,0,256s114.842,256,256,256c68.38,0,132.667-26.628,181.019-74.98l-40.226-40.226
    			C359.185,434.4,309.185,455.111,256,455.111C146.21,455.111,56.889,365.79,56.889,256S146.21,56.889,256,56.889
    			S455.111,146.21,455.111,256c0,26.14-21.267,47.407-47.407,47.407c-26.14,0-47.407-21.267-47.407-47.406V256
    			C360.296,198.491,313.509,151.704,256,151.704z M256,303.407c-26.14,0-47.407-21.267-47.407-47.407S229.86,208.593,256,208.593
    			S303.407,229.86,303.407,256S282.14,303.407,256,303.407z"
                />
              </g>
            </svg>

            <a
              href="https://www.twitter.com/arpowers"
              class="
                font-semibold
                text-xl
                lg:text-2xl
                text-primary-500
                hover:text-orange-600
              "
              >arpowers</a
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
            Get my newsletter. It features long-form studies on data-driven
            decision making, growth marketing, engineering, and philosophy. I
            write essays every week, and deliver insights as I learn them.
          </p>
          <p>
            <span class="font-bold">About Me:</span> These days, I’m the founder
            and CEO of
            <a
              class="text-primary-500 hover:text-orange-600"
              href="https://www.darwin.so"
              >Darwin</a
            >, where I focus on building the future of data, analytics, and
            marketing tools. I also do occasional investing and micro
            acquisitions. Previously, I built and sold a web tools business
            which I bootstrapped to 72,000+ customers. I’ll share from these
            experiences, and more, on my newsletter.
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
<script setup>
import ElemAvatar from "@factor/ui/ElemAvatar.vue"
import ElemButton from "@factor/ui/ElemButton.vue"
import BlogList from "./BlogList.vue"
import { emitEvent, useMeta } from "@factor/api"
</script>
