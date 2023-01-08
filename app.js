const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

var cors = require('cors')
const userRoutes=require('./ExpenseAppRoutes/signUp')
const errorController = require('./controllers/error');

const sequelize=require('./ExpenseAppUtil/database');

const app = express();
app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use('/user',userRoutes)

sequelize.sync()
.then(()=>{
    app.listen(4000)
})
.catch(err=>console.log(err));