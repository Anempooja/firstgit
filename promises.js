
let posts =[
    {title: 'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
] ;
var t=0;


function getPosts(){
    clearInterval(t);
    t=setInterval(()=> {
        let output='';
        for (var i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title}-last updated ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`


        };
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});


        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject('Error:something wemt wrong');
        }

    },1000);
});
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                resolve(posts.pop());
            }
            else{
                reject('Array is empty now')
            }
        },1000);
    })
}



    createPost({title: 'Post Three',body:'This is post three'})
async function deletion(){
    let a=await getPosts()
    let b=await deletePost()
    let c=await getPosts()
    let d=await deletePost()
    let e=await getPosts()
    let f=await deletePost()
    let g=await getPosts()
    let h=await deletePost()
    
}

deletion().then().catch(err=>console.log(err))