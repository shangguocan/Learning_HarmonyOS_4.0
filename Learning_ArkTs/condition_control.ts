// TypeScript条件判断

// 定义数字
let num:number = 21

// 判断是否是偶数
if(num % 2 === 0){
    console.log(num + '是偶数')
}else{
    console.log(num + '是奇数')
}


// 判断是否是正数
if(num > 0){
    console.log(num + ' 是正数')
}else if(num < 0){
    console.log(num + ' 是负数')
}else{
    console.log(num + ' 为0')
}


// 判断边浪是否有值
let data: any

if(data){
    console.log('数据存在：' + data)
}else{
    console.log('数据不存在！')
}