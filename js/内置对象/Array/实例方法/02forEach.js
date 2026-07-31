let arr = [1, 2, 3, 4, 5]
// 返回值是undefined，就是执行一下函数罢了，参数是数组对应的元素
let ans = arr.forEach((ele, index) => console.log(ele, index))
console.log(arr)
console.log(ans)