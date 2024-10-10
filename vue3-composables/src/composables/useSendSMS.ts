import { ref, Ref } from 'vue';
  
interface SendSMSOptions {  
  phoneNumber: string;  
  message: string;  
  onSuccess?: () => void;  
  onError?: (error: string) => void;  
}  
  
export function useSendSMS() {  
  const isSending: Ref<boolean> = ref(false);  
  const errorMessage: Ref<string | null> = ref(null);  
  
  const sendSMS = async ({ phoneNumber, message, onSuccess, onError }: SendSMSOptions) => {  
    if (!phoneNumber || !message) {  
      if (onError) onError('Phone number and message are required.');  
      return;  
    }  
  
    isSending.value = true;  
    errorMessage.value = null;  
  
    // Simulate an API call with a timeout  
    try {  
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay  
  
      // Simulate successful SMS send  
      if (onSuccess) onSuccess();  
    } catch (err) {  
      // Simulate error handling  
      errorMessage.value = 'Failed to send SMS. Please try again later.';  
      if (onError) onError(errorMessage.value);  
    } finally {  
      isSending.value = false;  
    }  
  };  
  
  return {  
    isSending,  
    errorMessage,  
    sendSMS,  
  };  
}