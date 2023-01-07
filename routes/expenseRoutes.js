const e = require('express')
const express=require('express')
const router=express.Router()
const expenseController=require('../controllers/expenseController')


router.post('/addExpense',expenseController.addExpense)

router.get('/getExpense',expenseController.getExpense)
router.delete('/:expenseId',expenseController.deleteExpense)
module.exports=router;