function any(arr){
    return new Promise((resolve,reject)=>{
        // let result = []
        let count = 0
        arr.forEach((pr)=>{
            Promise.resolve(pr).then(res=>{
                resolve(res)
            })
            .catch(err=>{
                count++
                if(count === arr.length){
                    console.log("error")
                }
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
    }, 1000);
})
let p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej(30)
    }, 1000);
})

any([p1,p2,p3])
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})
