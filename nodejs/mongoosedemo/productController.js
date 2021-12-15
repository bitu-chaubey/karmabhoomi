var express=require('express');
const { append } = require('express/lib/response');
var router=express.Router();

router.get('/', (req,res)=>{
    res.send("Product API");
})

module.exports= router;