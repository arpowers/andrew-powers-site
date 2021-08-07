<template>
  <router-view />
  <Veil />
  <Toaster />
</template>

<script lang="ts">
import Content from "../src/Content.vue"
import Veil from "@factor/ui/Veil.vue"
import Toaster from "@factor/plugin-notify/Toaster.vue"
import { useRouter } from "vue-router"
export default {
  name: "App",
  components: {
    Content,
    Veil,
    Toaster,
  },
  setup() {
    const router = useRouter()

    console.log("GGGGG", router.getRoutes())
    return {}
  },
}
</script>
