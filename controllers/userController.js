const User = require('../models/user');

exports.addUser = async(req, res, next) => {
  try{
    const username=req.body.username;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;
    const data=await User.create({username:username,email:email,phonenumber:phonenumber})
        
       return res.status(201).json({newUserDetails:data})}
    
    catch(err){
      res.status(500).json({error:err})
        console.log(err)
    }}
 
   
  
exports.getUser=async(req,res,next)=>{try{
  const users=await User.findAll()
  
   return res.status(200).json({allUsers:users})}

   catch(err){console.log(err)}
}
exports.deleteUser=async(req,res,next)=>{try{
  const userId = req.params.userId;
  await User.destroy({where:{id:userId}})
}
  
  catch(err){console.log(err)
  
}}