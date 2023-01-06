const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors())
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes=require('./routes/userRoutes');





app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/user',userRoutes)

app.use(errorController.get404);
sequelize.sync()
   .then((result)=>{
    //console.log(result)
    app.listen(4000);
   })
   .catch(err=>console.log(err))
  


