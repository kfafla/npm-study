import { defineStore } from "pinia";
import { ref } from "vue";

// 定义待办清单的数据类型
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// 定义 Store 使用组合式 API
export const useTodoStore = defineStore('todo',()=>{
    // 定义状态数组
    const todos = ref<Todo[]>([]);

    // 添加待办事项
    const addTodo = (todoText: string)=>{
        const newTodo: Todo ={
            id: Date.now(),
            text: todoText,
            completed: false,
        };
        todos.value.push(newTodo);
    };

    // 删除待办事项
    const removeTodo = (index:number) =>{
        todos.value.splice(index,1);
    };

    // 切换待办事项的状态
    const toggleTodo = (index:number) =>{
        if(todos.value[index]){
            todos.value[index].completed = !todos.value[index].completed;
        }
    };
    return {
        todos,addTodo,removeTodo,toggleTodo,
    };
},

{
    persist:{
        key: 'my-todo-store',
        storage:localStorage,
    },
}
);