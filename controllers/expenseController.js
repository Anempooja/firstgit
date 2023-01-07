const Expense=require('../models/expenseModel');


exports.addExpense=async(req,res,next)=>{
    try{
        if(!req.body.amount||!req.body.description||!req.body.category){
            console.log('please fill all the details')
            res.status(500).json({err:'not filled'})        }
        const amount=req.body.amount;
        const description=req.body.description;
        const category=req.body.category;
        const expense=await Expense.create({amount:amount,description:description,category:category})
        res.status(201).json({expense})
    }
    catch(err){
        console.log(err)
    }
}
exports.getExpense=async(req,res,next)=>{
    try{
        const expenses=await Expense.findAll()
        return res.status(200).json({Expenses:expenses})
    }
    catch(err){
        console.log(err)
    }
}

exports.deleteExpense=async(req,res,next)=>{try{
    if(!req.params.expenseId){
        console.log('expense not found')
        res.status(500).json({err:'not found'})      
    }
    const expenseId = req.params.expenseId;
    await Expense.destroy({where:{id:expenseId}})
    
  }
    
    catch(err){console.log(err)
    
  }}