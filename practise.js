
const errorController=require('./controllers/error404')
const loginController=require('./controllers/login')
const contactusController=require('./controllers/contactus')
const chatController=require('./controllers/chat')
const successController=require('./controllers/success')
const express=require('express')
const path= require('path')
const app =express()
app.use(express.static(path.join(__dirname,'/public')))
app.get('/login',loginController.getlogin)
app.get('/contactus',contactusController.getcontact)
app.get('/success',successController.getSuccess)

app.get('/',chatController.getChat)
app.post('/',chatController.postChat)
app.use(errorController.get404)

app.listen(4000)
