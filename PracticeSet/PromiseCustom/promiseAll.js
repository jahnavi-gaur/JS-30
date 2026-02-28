function promiseAll(arr){
    return new Promise((resolve,reject)=>{
        let result = []
        let count = 0
        arr.forEach((pr,i)=>{
            console.log(pr)
            Promise.resolve(pr)
            .then((res)=>{
                result[i] = res 
                count++
                if(count == arr.length){
                    resolve(result)
                }
            })
            .catch(err=>{
                console.error("Error: ",err)
            })
        })
    })
}


// // let p2 = Promise.resolve(2)
// let p1 = Promise.resolve(1)
// // let p3 = Promise.resolve(3)

// let p1 = Promise.resolve(2)
// let p2 = Promise.reject(2)
// let p3 = Promise.resolve(3)

// let p1 = Promise.resolve(2)
// let p3 = Promise.resolve(3)



promiseAll([p1,p2,p3])
.then((data)=>{
    console.log("a",data)
})
.catch(err=>console.log("error",err))
