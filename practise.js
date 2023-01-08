const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

var cors = require('cors')

const errorController = require('./controllers/error');

const sequelize=require('./util/database');

const app = express();

const Product=require('./models/product')
const User=require('./models/user')
const Cart=require('./models/cart')
const CartItem=require('./models/cart-item')
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes=require('./routes/userRoutes');
const expenseRoutes=require('./routes/expenseRoutes');


app.use((req,res,next)=>{
   User.findByPk(1)
   .then(user=>{
      req.user=user
      next()
   })
   .catch((err)=>{console.log(err)})
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user',userRoutes)
app.use('/expense',expenseRoutes)

app.use(errorController.get404);
Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'})
User.hasMany(Product)
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{through:CartItem})
Product.belongsToMany(Cart,{through:CartItem})


sequelize.sync()
   .then((result)=>{
      return User.findByPk(1)})
      .then((user)=>{
         if(!user){
            User.create({username:'pooja',email:'pooja@mail.com',phonenumber:'9855471541'})
         }
         return user})
         .then(user=>{
            return user.createCart()
         })
         .then(cart=>{
            //console.log(user)
    app.listen(4000);
   })
   .catch(err=>console.log(err))
  


