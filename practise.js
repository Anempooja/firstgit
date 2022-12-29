const fs = require('fs');
const path= require('path')
const rootDir=require('./util/path')
const express=require('express')
const bodyParser = require('body-parser')
const app =express()
app.use(bodyParser.urlencoded({extended:false}))
app.get('/login',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','login.html'))
})
app.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
})
app.get('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
})
app.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat exist'
        }
        
        res.sendFile(path.join(rootDir,'views','chat.html'))
    
        
    })
   })
app.post('/',(req,res,next)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile('message.txt',` ${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>(err)?console.log(err):res.redirect('/'))
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000)