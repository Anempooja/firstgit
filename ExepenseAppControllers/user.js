const User=require('../ExpenseAppModels/user');

const popup = require('node-popup');

exports.signUp= async(req, res, next) => {
    try{
      User.findAll()
      .then(users=>{
        for(var i=0;i<users.length;i++){
          if(users[i].name==req.body.email){
            console.error('user already exists')
            return
          }
        }
      })
      const name=req.body.name;
      const email=req.body.email;
      const password=req.body.password;
      const data=await User.create({name:name,email:email,password:password})
          
         return res.status(201).json({data})}
      
      catch(err){
        res.status(500).json({error:err})
          console.log(err)
      }}
exports.login=async(req,res,next)=>{
 try{
  const {email,password}=req.body;
    await User.findAll({where:{email}})
    .then(users=>{
      if(users.length>0){
        if(users[0].password==password){
          console.log('xx')
          return res.status(200).json({sucess:true,message:'user logged in successfuly '})}
          else{
            console.log('yy')
            return res.status(404).json({sucess:false,message:'password is incorrect' })
          }
  }
  else{
    return res.status(500).json({message:'user not found' })
  }
})
  }
  catch(err){console.log(err)}
}