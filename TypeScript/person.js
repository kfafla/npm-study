"use strict";
function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        greet: function () {
            return `Hello, my name is ${this.firstName} ${this.lastName} and 
              I am ${this.age} years old.`;
        }
    };
}
const person = createPerson('John', 'Doe', 30);
//VSCode 会在这里提供智能提示，如显示person 对象的属性和方法
console.log(person.greet());
//如果你尝试访问不存在的属性或方法，VSCode会立即显示错误提示。
//console.log(person.address)//这行代码会在VSCode中显示错误提示。
