let arr = [10, 20, 40, 30, 25, 38];

//array splice
function customSplice(arr,start,numToDelete,...rest){
    start = Math.max(0, start + arr.length)
    
    let leftArr = []
    let rightArr = []

    let deleted = []
    for(let i = start; i < start+numToDelete; i++){
        deleted.push(arr[i])
    }

    for(let i = 0; i < start; i++){
        leftArr.push(arr[i])
    }
    for(let i = start+numToDelete; i < arr.length; i++){
        rightArr.push(arr[i])
    }
    arr.length = 0
    for(let i = 0; i <leftArr.length; i++){
        arr.push(leftArr[i])
    }
    for(let i = 0; i <rest.length; i++){
        arr.push(rest[i])
    }
    for(let i = 0; i <rightArr.length; i++){
        arr.push(rightArr[i])
    }
    return deleted
}
console.log(customSplice(arr,-2,1))
console.log(arr)


//array slice()
function customSlice(arr, start = 0, end = arr.length) {
    let newArr = [];
    let length = arr.length;
    // Handle negative start
    if (start < 0) {
        start = length + start;
    }
    // Handle negative end
    if (end < 0) {
        end = length + end;
    }
    // Clamp values
    start = Math.max(0, start);
    end = Math.min(length, end);

    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;

}
// console.log(customSlice(arr, -2))


//array flat()
let arrToFlat = [[10, 20, 30, [40, 50]], 60, 70, [80]]
function customFlat(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            newArr.push(arr[i])
        }
        else {
            newArr = newArr.concat(customFlat(arr[i]))
        }
    }
    return newArr
}
// console.log(customFlat(arrToFlat))


//array copyWithin() - dont attempt


//array concat() - my version only receive 2 arr
//for multiple array we have by default arguments array in standard methods so we can use that array and then it is like flatten a array of array
function customConcat(arr1, arr2) {
    let newArr = []
    newArr = [...arr1, ...arr2]
    //we can also use for loop to iterative one each a time and insert element in newarray
    return newArr
}
// console.log(customConcat([1,2,4],[5,6,7]))


//array delete(arr[i]) - dont use delete to remove elemennts instead use pop, splice
function customDelete(arr, index) {
    if (index < 0 && index > arr.length - 1) {
        return arr
    }
    arr[index] = undefined
    return arr
}
// console.log(customDelete(arr,2))


//array isArray() X


//array unshift()
// let arr =[]
function customUnShift(arr, num) {
    if (arr.length == 0) {
        arr[0] = num
        return arr
    }
    arr.length = arr.length + 1
    let curElem = arr[0]
    let i = 0
    while (i < arr.length) {
        arr[i] = num
        num = curElem
        curElem = arr[i + 1]
        i++
    }
    return arr
}
// console.log(customUnShift(arr,10))

//array shift()
function customShift(arr) {
    if (arr.length == 1) {
        arr.length = 0
        return arr
    }
    let i = 0
    let j = 1
    while (j < arr.length) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i = j
        j++
    }
    arr.length = arr.length - 1
    return arr
}
// console.log(customShift(arr))


//array push()
function customPush(arr, num) {
    arr[arr.length] = num
    return arr
}
// console.log(customPush(arr,10))


//array pop()
function customPop(arr) {
    arr.length = arr.length - 1
    return arr
}
// console.log(customPop(arr))


//array join()
function customJoin(arr, sep) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += arr[i]
        }
        else {
            str += arr[i] + sep
        }
    }
    return str
}
// console.log(customJoin(arr," "))


//array at()
function customAt(arr, index) {
    if (index > arr.length - 1) {
        return undefined
    }
    let negLength = arr.length + index
    if (negLength < 0) {
        return undefined
    }
    if (index >= 0)
        return arr[index]
    else return arr[negLength]
}
// console.log(customAt(arr,-1))

//array toString
function customToString(arr) {
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            newStr += `${arr[i]}`
        }
        else {
            newStr += `${arr[i]},`
        }
    }
    return newStr
}
// console.log(customToString(arr))


// array length 
function customLength(arr) {
    let length = 0
    for (let i = 0; i < arr.length; i++) {
        length++
    }
    return length;
}
// console.log(customLength(arr))
