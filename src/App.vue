<template>
  <Content />
  <Veil />
  <Toaster />
  <NewsletterModal />
</template>

<script setup lang="ts">
import Content from "../src/Content.vue"
import Veil from "@factor/ui/Veil.vue"
import Toaster from "@factor/plugin-notify/Toaster.vue"
import NewsletterModal from "./NewsletterModal.vue"
</script>

<style lang="less">
@import "./style.less";
</style>
