const fs = require('fs');

const path= require('path')
const rootDir=require('../util/path')
const express=require('express')
const bodyParser = require('body-parser')
const app =express()
exports.getcontact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}