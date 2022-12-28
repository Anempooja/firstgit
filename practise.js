const fs = require('fs');

const express=require('express')
const bodyParser = require('body-parser')
const app =express()
app.use(bodyParser.urlencoded({extended:false}))
app.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input type="text" id="username" name="title"></input><button type="submit">login</button></form>')
})

app.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat exist'
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST" ><input type="hidden" id="username" name="username"><input type="text" id="message" name="message"><button type="submit">send</button></input></input></form>`)

    })
   })
app.post('/',(req,res,next)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile('message.txt',` ${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>(err)?console.log(err):res.redirect('/'))
})

app.listen(4000)