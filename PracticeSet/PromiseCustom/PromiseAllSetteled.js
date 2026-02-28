function allSetteled(arr){
    return new Promise((resolve,reject)=>{
        let result = []
        let count = 0
        arr.forEach((pr,i)=>{
            Promise.resolve(pr).then(res=>{
                result[i] = {status: 'fullfilled', value: res} 
            })
            .catch(err=>{
                result[i] = {status: 'rejected', reason: err}
            })
            .finally(()=>{
                count++
                if(count == arr.length)
                    resolve(result)
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
        res(30)
    }, 1000);
})

allSetteled([p1,p2,p3])
.then(res=>{
    console.log(res)
})