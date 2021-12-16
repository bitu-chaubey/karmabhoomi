var express = require('express');
var app=express();
var properties=require('./config/properties');
var db=require('./config/db')

var productRoutes=require('./products/product.routers')

db();

var bodyParser =  require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//var productRouter = require('./productController');

var productRouter=express.Router();
productRoutes(productRouter);
app.use('/productapi',productRouter);

app.listen(properties.PORT,(err)=>{
    if (err) console.log(err);
    console.log("Application started on port 8000");
});