<template>
  <div class="relative">
    <div class="relative max-w-7xl mx-auto">
      <div class="text-left">
        <h2 class="text-3xl tracking-tight font-extrabold sm:text-4xl">
          Studies
        </h2>
        <p class="mt-3 max-w-2xl text-xl text-normal-500 sm:mt-4">
          Research on data, marketing, engineering, and philosophy.
        </p>
      </div>
      <PostList />
    </div>
  </div>
</template>
<script lang="ts">
import PostList from "./blog/components/PostList.vue"

export default {
  components: { PostList },
  setup() {},
}
</script>
