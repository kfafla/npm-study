import { ref, onMounted, onUnmounted } from 'vue';  
  
export function useActiveElement() {  
  const activeElement = ref<HTMLElement | null>(null);  
  
  const handleFocus = (event: FocusEvent) => {  
    activeElement.value = event.target as HTMLElement;  
  };  
  
  onMounted(() => {  
    document.addEventListener('focus', handleFocus, true); // 使用捕获阶段以确保在 Shadow DOM 中也能正确工作  
  });  
  
  onUnmounted(() => {  
    document.removeEventListener('focus', handleFocus, true);  
  });  
  
  return {  
    activeElement,  
  };  
}