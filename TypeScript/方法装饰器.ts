function LogExecutionTime(
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]){
        console.log(`Executing ${propertKey}...`)
        return originalMethod.apply(this, args)
    }
}

class MyServive {
   @LogExecutionTime
     doSomething() {
        console.log('Doing something')
     }
}

const service = new MyServive()
service.doSomething()
/*输出：
 Executing doSomething...
 Doing something
*/