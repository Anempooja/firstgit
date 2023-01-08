const Sequelize=require('sequelize');
const sequelize=require('../ExpenseAppUtil/database');
const User=sequelize.define('user',{
id:{
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true
    
},name:{
    type:Sequelize.STRING
},email:{
    type:Sequelize.STRING,
    unique:true
},password:{
    type:Sequelize.STRING
}
})
module.exports=User