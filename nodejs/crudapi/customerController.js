var express =  require('express');
var router = express.Router();

var customers=[
    {
        "id":1,
        "name":"Abhishek",
        "email":"X"
    },
    {
        "id":2,
        "name":"Prakash",
        "email":"Y"
    }
];

var customer= {
    "id":1,
    "name":"Abhishek",
    "email":"X"
};

router.get("/",(req,res)=>{
    res.send("Express is cool and easy");
});

router.get("/customers",(req,res)=>{
    res.send(customers);
 
});

router.get("/customers/1",(req,res)=>{
    res.send(customer);
});

router.post("/customers",(req,res)=>{
    res.send(customer);
});

module.exports= router;
