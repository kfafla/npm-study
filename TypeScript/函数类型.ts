//函数是一个比较灵活的类型，因为它有参数和返回值。函数类型是由参数型和返回值型成的。下面是一个基本的无参数且返回值的函数

//普通函数
function fun1(): void{
    console.log('这是一个普通函数')
}

//剪头函数
const fun2 = (): void => {
    console.log('这是个剪头函数')
}

//如何函数返回字符串，就用string代替void，其他类型同理
const fun3 = (name: string): string => {
    return `姓名: ${name}`
}

//函数的参数可能是动态的。如果某个参数为必传，某个参数为非必传，此时就需要一个非必传标记。标记方法是在参数名后面加上“？”
const fun4 = (name: string, tag?:string): string => {
    return tag || ''+name
}
fun4('你好')
fun4('你好','世界')

//下面为一个变量指定函数类型

//声明变量
var fun5: (name: string, tag?: string) => string
//赋值函数
fun5 =(arg1: string, arg2?: string) => arg1 + arg2 || ''

//自定义类型（也叫类型别名）用type 关键字声明，一些复杂类非常适合用自定义类型代替
//自定义类型
type myFunType = (name: string, tag?: string) => string
//绑定类型
var fun6: myFunType = (name, tag) => {
    return name + tag
}