//定义一个泛型接口
interface Pair<T,U>{
    first: T;
    second: U;
}

//使用泛型接口
let pair1: Pair<string, number> = {first: "One", second: 1 };
let pair2: Pair<boolean,string> = {first: true, second:"True"};

console.log(pair1);//输出：{ first:"One", second : 1}
console.log(pair2);//输出：{ first: true, second: "True"}