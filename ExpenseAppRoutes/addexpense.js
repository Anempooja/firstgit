
const express=require('express')
const router=express.Router()
const expenseController=require('../ExepenseAppControllers/addExpense')


router.post('/addExpense',expenseController.addExpense)

router.get('/getExpense',expenseController.getExpense)
router.delete('/:expenseId',expenseController.deleteExpense)
module.exports=router;