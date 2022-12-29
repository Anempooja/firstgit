const fs = require('fs');

const path= require('path')
const rootDir=require('../util/path')
const express=require('express')
const bodyParser = require('body-parser')
const app =express()

exports.getChat=(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat exist'
        }
       
        res.sendFile(path.join(rootDir,'views','chat.html'))


    })
   }
   exports.postChat=(req,res,next)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile('message.txt',` ${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>(err)?console.log(err):res.redirect('/'))
}