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

async function createPost(post){
    return await new Promise((resolve,reject)=>{
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

async function deletePost(){
    return await new Promise((resolve,reject)=>{
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

function create4thPost(post,callback){
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

createPost({title:'Post Three', body:'This is post three'});
create4thPost({title:'Post Four', body:'This is post four'})

Promise.all([createPost,create4thPost])
.then(()=>{
    getPosts()
    deletePost()
})
.catch(err=> console.log(err))

