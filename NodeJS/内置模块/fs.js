const fs=require('fs')
//异步读取文件
/*fs.readFile('C:\Users\ymx1205\Desktop\frontend-study\NodeJS\内置模块\text.txt','utf-8',(err,data)=>{
    console.log('文件内容：',data)
})*/

//同步写入文件
/*try{
    let content='新的文件内容'
    fs.writeFileSync(
        'C:\Users\ymx1205\Desktop\frontend-study\NodeJS\内置模块\text.txt',
        content)
}catch(err){
    console.error(err)
}
    */

//检查文件状态
try{
    let status=fs.statSync(
        'C:\Users\ymx1205\Desktop\frontend-study\NodeJS\内置模块\text.txt'
    )
    console.log(status.isFile())
    console.log(status.isDirectory())
    console.log(status.size)
}catch(err){
    console.error(err)
}