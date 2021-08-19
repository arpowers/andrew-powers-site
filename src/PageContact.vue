<template>
  <div class="px-4 py-20">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="text-sm font-bold text-primary-500 tracking-wide uppercase"
          >
            Contact
          </h2>
          <p
            class="
              mt-1
              text-4xl
              font-extrabold
              sm:text-5xl sm:tracking-tight
              lg:text-6xl
            "
          >
            Email me anytime.
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-color-500">
            Nothing fancy just email.
          </p>

          <div class="action mt-20">
            <InputText
              class="
                text-3xl
                max-w-sm
                m-auto
                text-center
                py-5
                text-primary-600
                bg-color-25
              "
              href="mailto:hi@andrewpowers.co?subject=Hi Andrew!"
              value="hi@andrewpowers.co"
              readonly
            ></InputText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ElemAvatar from "@factor/ui/ElemAvatar.vue"
import InputText from "@factor/ui/InputText.vue"
import BlogList from "./BlogList.vue"
import { emitEvent, useMeta } from "@factor/api"
</script>
