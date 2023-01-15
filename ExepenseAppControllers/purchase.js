
const Razorpay=require('razorpay')

const Order=require('../ExpenseAppModels/orders')

const dotenv=require('dotenv')
const User = require('../ExpenseAppModels/user')
const Expense = require('../ExpenseAppModels/expense')
const e = require('cors')
dotenv.config()
exports.membership=async(req,res,next)=>{
    try{
        
        var rzp= new Razorpay({
            key_id: 'rzp_test_MchBMAoapiHXh8',
            key_secret: 'K3by2mzAAUsJNOLCnUs7rHJi'
        })
       
        const amount=25000;
        await rzp.orders.create({amount,currency:'INR'},(err,order)=>{
            if(err){
                console.log(err)
                throw new Error(err)
            }
            
            req.user.createOrder({orderid:order.id,paymentStatus:'PENDING'}).then(()=>{
                console.log('yyy')
                return res.status(200).json({order,key_id:rzp.key_id})
            })
            .catch(err=>{
                throw new Error(err)
            })
        })
    }
    catch(err){
        console.log(err)
        res.status(403).json({message:'something went wrong',error:err})
    }
}
exports.updateTransactionStatus=async(req,res)=>{
    try{
        console.log('pooja')
        //console.log(req.body)
        const {payment_id,order_id}=req.body
        const order=await Order.findAll({where:{orderid:order_id}})
        console.log(order)
            const promise1=order[0].update({paymentid:payment_id,paymentStatus:'SUCCESSFUL'})
            const promise2=req.user.update({ispremiumuser:true})
                promise.all(promise1,promise2).then(()=>{
                    return res.status(202).json({success:true,message:'Transaction sucessful'})
                })   
                .catch(err=>{throw new Error(err)})
        }
        catch(err){
            res.status(400).json({error:err})
        }
}
exports.leaderboard=async(req,res,next)=>{

try{
    const users=await User.findAll()
    const expenses=await Expense.findAll()
    const userAggregatedExpense={}
    expenses.forEach((expense)=>{
        if(userAggregatedExpense[expense.userId]){
            userAggregatedExpense[expense.userId]=userAggregatedExpense[expense.userId]+expense.amount
        }
        else{
            userAggregatedExpense[expense.userId]=expense.amount
        }
    })
    var userLeaderboardDetails=[]
    users.forEach((user)=>{
        userLeaderboardDetails.push({name:user.name,total_cost:userAggregatedExpense[user.id]})
    })
    console.log(userAggregatedExpense)
    res.status(200).json(userLeaderboardDetails)
}
catch(err){
    console.log(err)
}
}
        
    
   