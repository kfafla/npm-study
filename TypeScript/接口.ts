//提供了叫“接口”的类型，用关键字interface表示，专门用来设置JSON对象的类型
interface StudentType {
    id: number
    name: string
    desc?: string
}

const student: StudentType = {
    id: 1,
    name: '小明',
    desc: '三好学生',
}

//上述中的接口类型StudentType包含3个属性，id和name是必须的，desc是可选的


//为变量student赋值是必须遵循StudentType类型的规定，不规范的一律报错
/* const student: StudentType = {
   name: '小明'
   错误：缺少id属性
}
const student: StudentType = {
  id:1,
  name: '小明',
  age: 18
  错误：age不在接口类型StudentType中
}
*/

//interface类型支持多层嵌套以满足丰富的数据格式的需求
interface BaseType {
    value: number
    label: string
}

interface ListType {
    tag: string
    list: BaseType[]
}

const citys: ListType = {
    tag: '高校',
    list: [
        {
            value: 1,
            label: '清华大学',
        },
        {
            value: 2,
            label: '北京大学',
        },
    ],
}
console.log(citys)