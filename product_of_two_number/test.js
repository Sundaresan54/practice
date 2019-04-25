var server = require('./index');
var expect =  require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);


describe('GET /getProduct: product of the two number', function(){
    it('returns product of two number',function(done){
        request.get('/getProduct?input1=5&input2=5')
        .expect(200)
        .end((err,res)=>{
            expect(res.body.result).to.eql(25);
            done(err);
        });
    });
});