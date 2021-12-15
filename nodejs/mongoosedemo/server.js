var express = require('express');
var app=express();

var bodyParser =  require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var productRouter = require('./productController');
app.use('/productapi',productRouter);

app.listen(8000,(err)=>{
    if (err) console.log(err);
    console.log("Applicationj started on port 8000");
});