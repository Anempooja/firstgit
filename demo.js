let multiply=function(x,y){
    console.log(x*y)
}    
let multiplyTwo=multiply.bind(this,2)
multiplyTwo(5)
let multiplyThree=multiply.bind(this,3)
multiplyTwo(15)
let sum=function(a){
    return function(b){
        console.log(a+b)
    }
}    
let add=sum(5)
add(10)