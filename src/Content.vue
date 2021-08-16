<template>
  <div class="content-layout max-w-7xl m-auto">
    <PageHeader />
    <router-view />
  </div>
</template>
<script setup>
import PageHeader from "./PageHeader.vue"
</script>
