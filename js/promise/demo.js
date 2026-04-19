// 感觉忘了很多promise的知识诶哈哈哈，再来写写看

function anExample(num) {
    // 我们让这个函数返回一个Promise对象，而我们知道Promise对象可以有then和catch，Promise我们给两个方法(固定的)，resolve和reject，resolve就是成功了，可以执行then，否则执行catch，而then和catch的参数都是resolve和reject给的
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve(`这是一个正数 ${num}`)
        } else if (num <= 0) {
            reject(`这是一个负数或0 ${num}`)
        }
    })
}
anExample(10).then((res1) => console.log(res1, '正数'))
anExample(-10).then(res => console.log('因为是reject，所以不进这里')).catch(error => console.log(error, '应该是我们reject的内容'))

// 既然如此，我们继续试试
function useExample() {
    for (let num = -5; num < 5; num++) {
        anExample(num).then(res => console.log(res,)).catch(error => console.log(error))
    }
}
useExample()

// 这里通过for循环我们发现，多个promise先按顺序执行成功的，然后再按顺序catch(这段话是错的，如果把catch那到前面去，就先执行catch了)

function getExamples() {
    let arr = new Array();
    // for (let num = -100; num < -98; num++) {
    //     arr.push(anExample(num))
    // }
    for (let num = 98; num < 100; num++) {
        arr.push(anExample(num))
    }
    return arr
}

async function test() {

    let arrResovles;
    await Promise.all(getExamples()).then(res => arrResovles = res).catch(err => console.log(err))

    console.log(arrResovles)
}
// 我们发现，如果Promise.all中有一个是reject，那么就执行一次catch，执行的是遇到的第一个reject，假设全部都是resolve。如果都跑通了，那么把resovle返回的结果(合起来是个数组)可以通过then统一处理
test()



// 关于useExample过程就是，遇到promise就链式的告诉后面去微任务排队，然后排队到了就执行，顺手告诉后面的也要去排队。所以我们排队顺序就合理了。那么如果先catch，也是按着我们之前说的，遇到promise后面就去排队，catch先排队，所以是-5开始到0，然后正数的catch，虽然不执行，可是链路推进的时间不因为不执行而减少，把之前promise给catch的结果顺手传下去了(因为catch不执行)。接下来就是一些then的了，显示-5到0的then，由于都是undefined，然后正常的1234的输出。(顺序取决于入队顺序，而非catch和then的优先级高低)

// 最后就是示例代码了
Promise.reject("e")
    .catch((x) => { console.log(x); })
    .then((y) => console.log("y=", y));

Promise.resolve("ok")
    .catch(() => console.log("skip"))
    .then((z) => console.log("z=", z));