<template>
  <div class="content-layout max-w-7xl m-auto">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>
<script setup lang="ts">
import SiteHeader from "./SiteHeader.vue"
import SiteFooter from "./SiteFooter.vue"
import { useMeta } from "@factor/api"

// eslint-disable-next-line import/no-unresolved
import icon from "/icon.jpg"
useMeta({
  title: "Andrew Powers",
  meta: [
    {
      name: `description`,
      content: `Website of Andrew Powers (@arpowers) - Innovation and Development Architect`,
    },
    {
      vmid: "socialImage",
      property: "og:image",
      content: icon,
    },
    {
      vmid: "icon",
      rel: "icon",
      href: icon,
    },
  ],
})
</script>
