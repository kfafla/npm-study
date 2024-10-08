import { ref } from "vue";

export function useCounter(initValue = 0){
    //响应式变量number，初始值为入参initValue
    const count = ref<number>(initValue)


    //增加计数的函数
    const increament = () =>{
        count.value++;
    }

    //减少计数的函数
    const decreament = () =>{
        count.value--;
    }
    
    return {
        count,increament,decreament
    }
}