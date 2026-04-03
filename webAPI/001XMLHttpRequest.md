# XMLHttpRequest是一个对象，我们可以通过new创建一个实例

一个新的 XMLHttpRequest 对象。在调用 send() 向服务器发送请求之前，必须至少调用 open() 来初始化这个对象。

## 实例属性
### readyState

|值|状态 |描述|
|---|---|---|
|0|	UNSENT |代理被创建，但尚未调用 open() 方法。|
|1|	OPENED |open() 方法已经被调用。|
|2|	HEADERS_RECEIVED |send() 方法已经被调用，并且头部和状态已经可获得。|
|3|	LOADING |下载中；responseText 属性已经包含部分数据。|
|4|	DONE |下载操作已完成。|

### response
XMLHttpRequest 的 response 属性返回响应的正文。类型根据responseType决定，responseType 要在调用 open() 初始化请求之后以及在调用 send() 发送请求到服务器之前设置。 要在调用 open() 初始化请求之后以及在调用 send() 发送请求到服务器之前设置。

**send**请求是异步的所以希望下载操作完成后检查的内容应该放在onload里面，而不是放在send方法下面

### responseURL
这个是open那里面设置的

### status
XMLHttpRequest 响应中的数字状态码
2开头是成功响应，3开头是响应重定向，4开头是客户端错误，5开头是服务端错误

经典404是：可能用户访问的资源不存在
403是用户没有访问权限

### timeout
设置一个请求时间，如果这个时间内请求完成，触发onload事件，否则ontimeout

### 一些事件
onerror获取失败，onload是获取成功，ontimeout是请求超时，onprogress是数据传输中

## 实例方法
今天我就简单的看几个方法好了

### open方法
// 设置请求方法(post、get)、url、是否异步（选true异步进行）user和password是可选的用户名与密码。对于请求方法与url是必填的
// 这个同步请求的话，方法已经废弃，当然，我试了一下，还可以用，但是xhr.responseType = "text";以及请求时间是不可以设置的，设置了会报错，事实上就老老实实的true即可。而再事实上，xhr都不使用了。
xhrReq.open(method, url);
xhrReq.open(method, url, async);
xhrReq.open(method, url, async, user);
xhrReq.open(method, url, async, user, password);

### send()方法
send可以设置参数，就是发送的数据体，如果没写就默认为null

就简单说到这里
2026/4/3