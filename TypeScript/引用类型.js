"use strict";
//数组是某个或多个类型的集合，有两种定义方式
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
//数组的数组项包含字符串和数字，那么数组类型可以使用"number|string"这种联合类型
let arr1 = [1, 2, '3', '4'];
//数组项包含任意类型，直接用"any".非必要最好不要使用，会丢失一部分类型验证
let arr2 = [1, '2', true, null];
//引用类型的数据可以被称为对象。这些广义上的对象类型统一用object表示
var date = new Date();
var fun = () => { };
var arr = ['object'];
//object类型的作用仅仅是区分基本类型和引用类型，将变量设置为object类型，其值不可以是基本类型
// var num:object =2 错误：不能将number类型分配给object类型
//var str: oject ='hello world' 错误：不能将string类型分配给object类型
