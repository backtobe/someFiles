/*
  在javascript一书中，对于回调的信任做了阐述，当你使用第三方库的方法处理回调时，可能会遇到一下信任问题
  1、调用回调过早(在他开始追踪之前)
  2、调用回调过晚(或不调)
  3、调用回调太少或太多次
  4、没能想向你的回调传递必要的环境/参数
  5、吞掉了可能发生的错误/异常
  在js中,Promise可以给你一个回应状态
*/

// 简单的Promise 创建与使用例子
let promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    let num = parseInt((Math.random() *100))
    if(num>50){
      resolve(num)
    }else {
      reject(num)
    }
  },500)
})

// promise.then(res => console.log(`${res}大于50`),err => {console.log(`${err}小于50`)})

// 对Promise的结果进行处理

promise.then((res =>{
  console.log(`${res}大于50`)
  return new Promise((resolve) => {
    if(res>75){
      console.log(`${res}大于75`)
      resolve(res)
    }
  })
})).then(res => {
  return new Promise((resolve) => {
    if(res>87){
      console.log(`${res}大于87`)
      resolve(res)
    }
  })
},err => console.log(`${err}小于50`))