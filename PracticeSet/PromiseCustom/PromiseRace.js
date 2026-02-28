
function promiseRace(arr){

    return new Promise((resolve,reject)=>{
        
        arr.forEach((pr)=>{
            Promise.resolve(pr).then((res)=>{
              // console.log("success", res)
                resolve(res)
            })
            .catch(err=> {
              // console.log("err",err)
              reject(err)
              
            })
        })
    })
}

let p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej(10)
    }, 1000);
})
let p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res(20)
    }, 2000);
})
let p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        res(30)
    }, 4000);
})

// let p1 = Promise.reject(4)
// let p2 = Promise.resolve(5)
// let p3 = Promise.resolve(6)

// promiseRace([p1,p2,p3])
// .then(data=>console.log("a",data))
// .catch(err=>console.log("b",err))
    

Promise.allSettled([p1,p2,p3])
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})