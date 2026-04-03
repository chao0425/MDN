function ajax(method, url, solveCallback, rejectCallback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onload = function () {
        if(xhr.status < 300 && xhr.status >= 200) {
            console.log(xhr.status)
            solveCallback(xhr.response)
        } else {
            console.log(xhr.status)
            rejectCallback(xhr.status)
        }
    }
    xhr.onerror = function() {
        throw new Error('HTTP请求失败')
    }

    xhr.send()
}

export {ajax}