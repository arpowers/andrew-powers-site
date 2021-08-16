<template>
  <Content />
  <Veil />
  <Toaster />
</template>

<script setup>
import Content from "../src/Content.vue"
import Veil from "@factor/ui/Veil.vue"
import Toaster from "@factor/plugin-notify/Toaster.vue"
</script>

<style lang="less">
@import "./style.less";
</style>
