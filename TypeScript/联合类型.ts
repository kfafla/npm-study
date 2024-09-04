//联合类型用符号"|"将多个类型连接起来，使用非常简单
var val1: string | number
var val2: object | null = null

//联合类型表示某个值可能有多个类型。在使用联合类型时，TypeSscript只会将多个类型的共有属性看作值的属性，如果不是共有属性，那么TypeScript会提示错误（方法与属性同理）
var val3: string | number = 123
console.log(val3.toString())
//错误：number 类型不存在length console.log(val3.length)

//可以为变量"强制指定某个类型",这种方式叫做类型断言。类型断言是通过关键字as来实现的
let val4: unknown = 'this is a string'
let strLength: number = (val4 as string).length
//需要注意：只有非常确定数据类型的情况下才使用类型断言，否则还是交由TypeScript判断