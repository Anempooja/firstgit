
const express=require('express')

const expenseController=require('../ExepenseAppControllers/addExpense')
const userAuthentication =require('../expenseMiddleware/autherization')
const router=express.Router()

router.post('/addExpense',expenseController.addExpense)

router.get('/getExpense',userAuthentication.authenticate,expenseController.getExpense)
router.delete('/:expenseId',expenseController.deleteExpense)
module.exports=router;