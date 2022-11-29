function a(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a')
    }, 1000);
})
}
function b(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b')
        }, 1000);
    })
    }
function c(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('c')
    }, 1000);
})
}    
a().then((x)=>{
    console.log(x)
    b().then((y)=>{
        console.log(y)
        c().then((z)=>{
            console.log(z)
        })
    })
})
async function difference(){
    let A=await a();
    console.log(A)
    let B=await b()
    console.log(B)
    let C= await c()
    console.log(C)
}
difference();