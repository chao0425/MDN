Window 接口的 fetch() 方法用于发起获取资源的请求，它会返回一个会在请求响应后兑现的 promise。
fetch(resource)这个参数是url

then() 函数会返回一个和原来不同的新的.

**promise的参数是一个函数**，返回值通过resolve(这部分是返回值)实现，然后.then调用时候，参数就是这个返回值了

在 then 回调中始终返回 Promise 是非常重要的我们接下来展示了将异步操作封装进Promise返回，然后resolve(返回值)就可以了，如果分情况，可能有reject()

> function getATimeOut(str,ans,ms){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(str)
            resolve(ans)
        },ms)
    })
}
getATimeOut('先打印','后打印',1000).then(data => console.log(data))


接下来我们说async/await ，更直观的使用Promise使用async声明函数，await修饰回调函数

const sleep = ms => new Promise((resolve) => { setTimeout(() => resolve(), ms) })

可读性有点低哈哈哈，简单说一下，就是sleep是个函数(箭头函数)，参数是ms，这个箭头函数返回一个Promise，而Promise体为定时器，ms秒后执行resolve，即ms秒后返回结果，那么如果是同步的话，这ms时间就等着resolve的返回。

try{}catch(error){},这个error为try代码块内抛出的异常，类似Java的trycatch吧

对于trycatch和then.catch都是可以嵌套的，我们下面的例子是很好理解的，如果thr就跳过此代码块向下找catch，catch后该怎么做怎么做
> new Promise((resolve, reject) => {
  console.log("初始化");
  resolve();
})
  .then(() => {
    throw new Error("有哪里不对了");
    console.log("执行「这个」");
  })
  .catch(() => {
    console.log("执行「那个」");
  })
  .then(() => {
    console.log("执行「这个」，无论前面发生了什么");
  });
初始化
执行「那个」
执行「这个」，无论前面发生了什么