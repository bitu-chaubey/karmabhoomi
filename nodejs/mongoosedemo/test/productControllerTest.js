let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Product API', ()=>{
    before(function(){
        console.log("before")
    })

    after(function(){
        console.log("after")
    })

    beforeEach(function(){
        console.log("beforeEach")
    })


    afterEach(function(){
        console.log("afterEach")
    })


    it('Get All Products',()=>{
        return chai.request('http://localhost:8000/productapi')
        .get('/products')
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })


    it('Create Product',()=>{
        return chai.request('http://localhost:8000/productapi')
        .post('/products')
        .send({ "name":"Lenovo", "price":1500})
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })

    it('Get Single Product',()=>{
        return chai.request('http://localhost:8000/productapi')
        .get('/products/61ba32563ea62794b95606b8')
        .then((res)=>{
            expect(res).to.have.status(200);
        }).catch((err)=>{
            throw err;
        })
    })



})



