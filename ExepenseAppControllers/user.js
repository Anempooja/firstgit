const User=require('../ExpenseAppModels/user');



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
 
      