process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
var should = chai.should();
chai.use(chaiHttp);
const app = require('../app')
const Product = require('../models/products')
const cors = require('cors')
app.use(cors())

   //Este test devuelve todos los productos, un estado 200

   describe('get all products: ',()=>{
    it('should get all products', (done) => {
    chai.request(app)
    .get('/tienda.html')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    //res.should.be.html;
    done();
       });
    });
});