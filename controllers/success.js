const fs = require('fs');

const path= require('path')
const rootDir=require('../util/path')
const express=require('express')
const bodyParser = require('body-parser')
const app =express()
exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}