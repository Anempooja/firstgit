const posts=[
    {title:'post one',body:'This is post one',createdAt: new Date().getTime()},
    {title:'post two',body:'This is post two',createdAt: new Date().getTime()}
];
let t=0;
function getPost(){
    clearInterval(t);
    t=setInterval(()=> {
        let output='';
        for(var i=0;i<posts.length;i++){
            output+=`<li>${posts[i].title}-last updated ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`
        };
        document.body.innerHTML=output;
    },1000);
}
function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}
function create4thPost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },1000);
}
createPost({title:'Post Three', body:'This is post three'},getPost);
create4thPost({title:'Post Four', body:'This is post four'},getPost);









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
    .then(()=>{
        getPosts()
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                    deletePost().then(()=>{})
                    .catch((err)=>{
                        //console.log('Inside catch block:',err)
                    })
                }).catch((err)=>{})
            }).catch((err)=>{})
        })
    })
    .catch(err => console.log(err))
