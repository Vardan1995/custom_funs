
//################### TASK 1  Implement customForEach, customReduce, customFilter, customMap


Array.prototype.customForEach = function (callbackfn) {
    for (let i = 0; i < this.length; i++) {
        callbackfn(this[i], i, this)
    }
}


Array.prototype.customReduce = function (callbackfn, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }

    for (; i < this.length; i++) {
        result = callbackfn(result, this[i], i, this);
    }
    return result;
}

Array.prototype.customFilter = function (callbackfn) {
    const result = []
    this.customForEach((el, i) => {
        if (callbackfn(el, i, this)) result.push(el)
    })
    return result;
}

Array.prototype.customMap = function (callbackfn) {
    let result = []
    this.customForEach((el, i) => result.push(callbackfn(el, i, this)))
    return result
}

//##################### TASK 2  Implement divideIntegerIntoArray


function divideIntegerIntoArray(x, n) {
    const result = []

    if (x < n) {
        throw new Error("x must be greater than n")
    } else if (x % n != 0) {
        let zp = n - (x % n)
        let pp = Math.floor(x / n)
        for (let i = 0; i < n; i++) {
            if (i >= zp) {
                result.push(pp + 1)
            } else {
                result.push(pp)
            }
        }
    } else {
        for (let i = 0; i < n; i++) {
            result.push((x / n))
        }
    }
    console.log(result);
}

//.................................................................

[1, 2, 3].customForEach((current, index, arr) => {
    console.log({ current, index, arr })
})

divideIntegerIntoArray(13, 5)



