<template>
  <ElemModal v-model:vis="vis">
    <div class="p-6">
      <div v-if="sent">
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-bold" id="modal-title">
            You're Signed Up
          </h3>
          <div class="my-2">
            <p class="text-sm text-color-500">Glad to have you. Stay tuned.</p>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <div
            class="
              mx-auto
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-full
              bg-primary-100
            "
          >
            <svg
              class="h-6 w-6 text-primary-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-bold" id="modal-title">
              Get the Newsletter
            </h3>
            <div class="my-2">
              <p class="text-sm text-color-500">
                Get studies delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <ElemForm @submit="signupForNewsletter()">
            <div class="flex space-x-4">
              <ElemInput
                input="email"
                class="my-0 flex-grow"
                v-model="email"
                required
              />

              <ElemButton type="submit" btn="primary" :loading="sending"
                >Sign Up &rarr;</ElemButton
              >
            </div>
          </ElemForm>
        </div>
      </div>
    </div>
  </ElemModal>
</template>

<script lang="ts">
import { onEvent } from "@factor/api"
import ElemModal from "@factor/ui/ElemModal.vue"
import ElemForm from "@factor/ui/ElemForm.vue"
import ElemButton from "@factor/ui/ElemButton.vue"
import ElemInput from "@factor/ui/ElemInput.vue"
import { darwin } from "./darwin"
import { ref } from "vue"

export default {
  components: { ElemModal, ElemInput, ElemForm, ElemButton },

  setup() {
    const vis = ref(false)
    const email = ref("")
    const sent = ref(false)
    const sending = ref(false)
    onEvent("nlSignup", () => {
      console.log("on event")
      vis.value = true
    })

    const signupForNewsletter = async (): Promise<void> => {
      sending.value = true
      await darwin().identify("", { email: email.value })

      sent.value = true
      sending.value = false
    }
    return {
      vis,
      signupForNewsletter,
      sending,
      sent,
    }
  },
}
</script>
