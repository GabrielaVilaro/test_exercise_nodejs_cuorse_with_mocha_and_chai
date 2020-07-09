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

//este test envía un post correcto, por lo que devuelve un estado 200

describe('Insert a product: ',()=>{
    it('should insert a product', (done) => {
    chai.request(app)
    .post('/index.html')
    .send({name:'camisetaNueva', id: 1, price: 1500, description: 'nueva camiseta'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
          });
      });
  });