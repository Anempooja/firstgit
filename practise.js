const express=require('express')

const adminRouter=require('./routes/admin')   //imports the admin file from routes file
const shopRouter=require('./routes/shop')
const bodyParser = require('body-parser')
const app =express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRouter)  //this will call the code in the file
app.use('/shop',shopRouter) 
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(4000)

