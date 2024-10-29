import Mock from "mockjs"


//请求接口：https://api.zhihu.com/hot
//查询返回一个包含十条数据的数组
Mock.mock("https://api.zhihu.com/hot","get",{
    "data|10":[
        {
            "id|+1":1, //id自增，从1开始
            title:"@ctitle(5,10)", //随机生成中文标题，字数在5-10之间
            excerpt:"@paragraph(2,3)",//随机生成简介，段落包含2-3个句子
            url:"@url",//随机生成详情连接
            image: '@image("200x100", "#50B347", "#FFF", "img")',//随机生成占位图片
            hotIndex:"@integer(1000,5000)",//随机生成热度范围在1000-5000之间
        },
    ],
});

//Mock 添加数据POST 请求

Mock.mock("https://api.zhihu.com/hot","post",{
    message:"添加成功",
    data: {
            id:"@integer(11,100)",
            title:"新的标题", 
            excerpt:"新的内容",
            url:"@url",
            image: 'https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/%E5%A4%B4%E5%83%8F.jpg',
            hotIndex:"99999",
    },
});

//Mock更新数据put \d+  匹配所有https://apip.zhihu.com/hot/ 开头的请求
Mock.mock(/https:\/\/api.zhihu.com\/hot\/\d+/,"put",{
    message:"更新成功",
});
//Mock删除数据DELETE \d+  匹配所有https://apip.zhihu.com/hot/ 开头的请求
Mock.mock(/https:\/\/api.zhihu.com\/hot\/\d+/,"delete",{
    message:"删除成功",
});

