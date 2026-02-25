let arr = [10,20,40,30,50]
function callback(val,index,arr){
    return val*2
}
function callback2(val,index,arr){
    return val > 20;
}

// fruits.keys() - iterator of index
// fruits.entries() - return [[index,arr[index]],[index,arr[index]]
// fruits.keys() - iterator of index

//from() - return Array object - any object with length property - only work with objects with length property - string,array, arraylike obj


//some() - if atleast one value satisfy cond return true
function some(callback,arr){
    for(let i = 0; i <arr.length; i++){
        let ans = callback(arr[i],i,arr)
        if(ans){
            return true
        }
    }
    return false
}
// console.log(some(callback2,arr))


//every() - if every element satisfy cond return true
function every(callback,arr){
    for(let i = 0; i <arr.length; i++){
        let ans = callback(arr[i],i,arr)
        if(!ans){
            return false
        }
    }
    return true
}
// console.log(every(callback2,arr))


//reduceRight() - start reducing from right


//if you dont provide initial value arr[0] is default initial valuee and loop start from index 1
//if initial value is provided then start loop from index 0
//reduce() - return accumulate value - reduce behaviour depend on accum
function callback3(acc,val,index,arr){
    return acc + val
}
function reduce(callback,arr,initialvalue=0){
    let acc = initialvalue
    for(let i = 0; i < arr.length; i++){
        acc = callback3(acc,arr[i],i,arr)
    }
    return acc
}
// console.log(reduce(callback3,arr,10))



//filter() - return new array
function filter(callback,arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let ele = callback(arr[i],i,arr)
        if(ele){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(filter(callback2, arr))


//flatMap() - first map then flat return new array
function customFlatMap(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let mappedValue = callback(arr[i], i, arr);

        if (Array.isArray(mappedValue)) {
            result = result.concat(mappedValue); // flatten 1 level
        } else {
            result.push(mappedValue);
        }
    }

    return result;
}
// console.log(customFlatMap(arr,callback))



//map() - return new array
function customMap(callback,arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let ele = callback(arr[i],i,arr)
        newArr.push(ele)
    }
    return newArr
}
// console.log(customMap(callback,arr));


//forEach() - mutate same array
function customForEach(callback,arr){
    for(let i = 0; i < arr.length; i++){
        let ele = callback(arr[i],i,arr);
        arr[i] = ele 
    }
    return arr
}
// console.log(customForEach(callback,arr))


function flat(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flat(arr[i]))
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr
}
// console.log(flat(arr))