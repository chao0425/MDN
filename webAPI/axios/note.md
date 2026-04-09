我们使用的json-server来模拟的后端接口，简单说下怎么弄

> 1.npm install -g json-server
2.在demo根目录下写个db.json(我不确定写在哪里，但是我这个例子就写在根目录下了)，db.json里面是json格式的数据，可以模拟多张表的存在
3.npm install axios@1.14.0(这个是安装axios，这一节的主题，至于package.json自动配置了)
4.json-server --watch db.json --port 5000我们选择守候在5000端口
5.npm install -g http-server
6.http-server
7.html里面script src="./node_modules/axios/dist/axios.min.js"引入这个

**我们在axios方法中写的字段名一定要和接口提供的字段名一样**

**我们在过程中经常发现更改删除时候，可能出现展示数据部分没同步修改，为什么呢，答案是axios是异步的，我们要await同步代码块**

我们使用delete举例，delete(db里面没有的id)，猜猜返回什么状态码？我们如果不catch，程序直接console一整个大报错，看着很乱，所以我们可以catch一下
> 答404，因为id不存在是用户访问的资源不存在
const deleteUser = (id) => axios.delete(\`$\{API_BASE\}user/${id}`).catch((error)=>{
    if(error.response) {
        console.log(error.response.status)
    }
})

**if语句中的异步请求也要await哦...**

