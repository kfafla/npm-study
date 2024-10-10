import { ref, computed, onUnmounted } from 'vue';  
  
export function useCountdown(initialTime: number) {  
  const countdown = ref<number>(initialTime);  
  let timerId: number | undefined = undefined;  
  
  const start = () => {  
    if (timerId !== undefined) return; // 防止重复启动  
    timerId = window.setInterval(() => {  
      if (countdown.value > 0) {  
        countdown.value--;  
      } else {  
        stop(); // 倒计时结束，停止定时器  
      }  
    }, 1000);  
  };  
  
  const stop = () => {  
    if (timerId !== undefined) {  
      window.clearInterval(timerId);  
      timerId = undefined;  
    }  
  };  
  
  const reset = () => {  
    stop(); // 先停止定时器  
    countdown.value = initialTime; // 重置倒计时  
  };  
  
  // 格式化倒计时时间  
  const formattedTime = computed(() => {  
    const minutes = Math.floor(countdown.value / 60).toString().padStart(2, '0');  
    const seconds = (countdown.value % 60).toString().padStart(2, '0');  
    return `${minutes}:${seconds}`;  
  });  
  
  // 组件卸载时自动停止倒计时  
  onUnmounted(() => {  
    stop();  
  });  
  
  return {  
    countdownValue: countdown.value, // 直接暴露原始 ref 值可能不是最佳实践，但这里为了演示  
    formattedTime,  
    start,  
    stop,  
    reset,  
  };  
} 