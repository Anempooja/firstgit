const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

var cors = require('cors')
const Expense=require('./ExpenseAppModels/expense')
const User=require('./ExpenseAppModels/user')
const userRoutes=require('./ExpenseAppRoutes/signUp')
const expenseRoutes=require('./ExpenseAppRoutes/addexpense')
const errorController = require('./controllers/error');

const sequelize=require('./ExpenseAppUtil/database');
User.hasMany(Expense)
Expense.belongsTo(User)

const app = express();
app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use('/user',userRoutes)
app.use('/expense',expenseRoutes)

sequelize.sync()
.then(()=>{
    app.listen(4000)
})
.catch(err=>console.log(err));