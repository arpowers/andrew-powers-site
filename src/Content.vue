<template>
  <div class="content-layout max-w-7xl m-auto">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>
<script setup>
import SiteHeader from "./SiteHeader.vue"
import SiteFooter from "./SiteFooter.vue"
</script>
