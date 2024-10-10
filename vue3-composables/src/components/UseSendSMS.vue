<template>
  <div>
    <h1>Send SMS</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" v-model="phoneNumber" id="phoneNumber" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="message" id="message" required></textarea>
      </div>
      <button type="submit" :disabled="isSending">Send SMS</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useSendSMS } from "../composables/useSendSMS";

export default defineComponent({
  name: "SendSMSForm",
  setup() {
    const phoneNumber = ref("");
    const message = ref("");
    const { isSending, errorMessage, sendSMS } = useSendSMS();

    const handleSubmit = () => {
      sendSMS({
        phoneNumber: phoneNumber.value,
        message: message.value,
        onSuccess: () => {
          alert("SMS sent successfully!");
          phoneNumber.value = "";
          message.value = "";
        },
        onError: (error) => {
          alert(error);
        },
      });
    };

    return {
      phoneNumber,
      message,
      isSending,
      errorMessage,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.error {
  color: red;
}
</style>
