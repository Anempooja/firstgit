const Sequilize=require('sequelize')
const sequilize=new Sequilize('node-complete','root','pooja@123',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequilize