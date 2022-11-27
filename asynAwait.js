console.log('person 1 shows ticket');
console.log('person 2 shows ticket');
const person3=async ()=>{
    const wifeGetsTicket=new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })
   
    const getPopcorn= new Promise((resolve, reject) => {
        resolve(`popcorn`)
    })
    const getButter= new Promise((resolve, reject) => {
        resolve(`butter`)
    })
    const getColdDrinks= new Promise((resolve, reject) => {
        resolve(`cold drink`)
    })
    let ticket=await wifeGetsTicket
   
    console.log('wife: i have tickets')
    console.log('husband: shall we go in')
    console.log('wife: no iam hungry ')
    let popcorn=await getPopcorn;
    
    console.log(`husband: i got ${popcorn}`)
    console.log('husband: shall we go in')
    console.log('wife: no i need butter on my popcorn ')
    let butter=await getButter;
    console.log(`husband: i got some ${butter} on popcorn`)
    console.log('husband: anything else?');
    console.log('wife: yes cold drink')
    let coldDrink= await getColdDrinks
    console.log(`husband: take the ${coldDrink} `)
    console.log('husband : can we go now its getting late or anything do you need')
    console.log('wife: no nohing lets go')
    console.log('husband:ok fine lets go')
    return ticket;
}

person3().then((t)=>console.log(`person 3 shows ${t}`));
console.log('person 4 shows ticket');
console.log('person 5 shows ticket');