"use strict";
//泛型（Generics)允许你创建可重用的、类型安全的代码，使函数、类、接口等能够与多种类型协同工作
//定义一个泛型函数，T 是泛型参数
function identity(arg) {
    return arg;
}
//使用泛型函数
let output1 = identity("Hello TypeScript!"); //明确指定 T 为string
let output2 = identity(42); //明确指定 T 为number
console.log(output1); //输出：Hello TypeScript!
console.log(output2); //输出：42
