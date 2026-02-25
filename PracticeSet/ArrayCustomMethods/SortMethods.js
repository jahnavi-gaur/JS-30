let arr = [10,30,20,40,33,100,90,70,50,30,10,5]





//find min and max value of array
//1- sort and give 1 and last value
//2- Math.min(), Math.max()
//3- custom method //i implement both in one but we can implement them alone
function minMax(arr){
    let min = arr[0]
    let max = arr[0]

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            if(max < min){
                min = max 
            }
            max = arr[i]
        }
        else if(arr[i] < min){
            if(min > max){
                max = min 
            }
            min = arr[i]
        }
    }
    return [min,max]
}
// console.log(minMax(arr))


//sort an array in random order
function randomSort(arr){
    // arr.sort(()=> 0.5-Math.random())
    // return arr 
    // )

    for(let  i = arr.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1))
        let k = arr[i]
        arr[i] = arr[j]
        arr[j] = k
    }
    return arr
   
}
// console.log(randomSort(arr))


//toSorted and toReversed same implementation but return new array

//arr.reverse()
function reverse(arr){
    let i = 0
    let j = arr.length-1
    while(i <= j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    return arr 
}
// console.log(reverse(arr))


//arr.sort() - use any sorting technique you want