看文件名字我们发现这个是Array数组的一个方法，根据昨天我们学习的原型链
Array.prototype.filter(callbackFn)可以得知，我们每个数组都可以调用filter()方法，毕竟Array.prototype是数组字面量的原型。
>callbackFn
为数组中的每个元素执行的函数。它应该返回一个真值以将元素保留在结果数组中，否则返回一个假值。

这个方法的大概意思是，参数内提供一个函数，函数返回值为boolean，如果为真，此元素复制过去，为假就不复制。因为我们是通过数组调用这个方法，所以filter是遍历我们的数组的。参数是个函数，这个函数的参数是我们的原始数组的元素。

这个filter方法的参数是个函数，而这个函数的参数我们简单说一下，其中，index参数是可选的
>element
数组中当前正在处理的元素。
index
正在处理的元素在数组中的索引。


文档给了个例子是这样的
>function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

2026/4/2
<hr/>