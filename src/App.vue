<template>
  <Content />
  <Veil />
  <Toaster />
</template>

<script setup lang="ts">
import Content from "./AppContent.vue"
import Veil from "@factor/ui/LoadingVeil.vue"
import Toaster from "@factor/plugin-notify/NotifyToaster.vue"
</script>

<style lang="less">
@import "./style.less";
</style>
