
const Razorpay=require('razorpay')

const Order=require('../ExpenseAppModels/orders')

const dotenv=require('dotenv')
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
        const {payment_id,order_id}=req.body
        const order=await order.findOne({where:{orderid:order_id}})
            const promise1=order.update({paymentid:payment_id,paymentStatus:'SCCESSFUL'})
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