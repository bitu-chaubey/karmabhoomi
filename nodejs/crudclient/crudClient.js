const axios = require('axios');

const url="http://localhost:8000/productapi/products/"
function getProducts(){
    axios.get(url).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.error(err);
    });
}

function saveProducts(){
    var product = {
        "name":"Iphone",
        "price":1500
    }
    axios.post(url, product).then(res =>{
        console.log(res);
    }).catch(err=>{
        console.error(err);
    })
}

function updateProduct(){
    var product = {
        "name":"Iphone+",
        "price":1200
    };
    axios.put(url+'61ba1e3f3fdf357cb225bce4', product).then(res =>{
        console.log(res);
    }).catch(err=>{
        console.error(err);
    })
}

function getProduct(){
    axios.get(url+'61ba1e3f3fdf357cb225bce4').then(res =>{
        console.log(res.data);
    }).catch(err=>{
        console.error(err);
    })
}

function deleteProduct(){
    axios.delete(url+'61ba1e3f3fdf357cb225bce4').then(res =>{
        console.log(res.data);
    }).catch(err=>{
        console.error(err);
    })
}
//getProducts();
//saveProducts();
//updateProduct();
//getProduct();
deleteProduct();