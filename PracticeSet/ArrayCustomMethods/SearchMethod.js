let arr = [10,30,50,60,30,20]

//array findLastIndex()
function customFindLastIndex(arr,callback){
    let ans = -1
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            ans =  i
        }
    }
    return ans
}
// console.log(customFindLastIndex(arr,callback))


//array findLast
function customFindLast(arr,callback){
    let ans = undefined
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            ans = arr[i]
        }
    }
    return ans
}
function callback(num){
    return num > 2
}
// console.log(customFindLast(arr,callback))


//array findIndex()
function customFindIndex(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return i
        }
    }
    return -1
}
// console.log(customFindIndex(arr,callback))


//array find
function customFind(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            return arr[i]
        }
    }
    return undefined
}
function callback(num){
    return num > 2
}
// console.log(customFind(arr,callback))


//array includes()
function customIncludes(arr,ele){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ele){
            return true 
        }
    }
    return false
}
// console.log(customIncludes(arr,30))


//array lastIndexOf()
function lastIndexOf(arr,ele,start=0){
    if(start < 0){
        start = start + length
    }
    let ans = -1
    for(let i = start; i < arr.length; i++){
        if(arr[i] == ele){
            ans = i 
        }
    }
    return ans
}
// console.log(lastIndexOf(arr,20,3))


//array indexOf()
function customIndexOf(arr,ele,start = 0){
    if(start < 0){
        start = start+1
    }
    for(let i = start; i < arr.length; i++){
        if(arr[i] == ele){
            return i
        }
    }
    return -1
}
// console.log(customIndexOf(arr,30))
// console.log(customIndexOf(arr,30,2))

