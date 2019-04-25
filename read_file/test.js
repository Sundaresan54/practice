var server =  require('./index');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('GET /read the file ', function(){
    it('return the read value from file', function(done){
        request.get('/readFile')
        .expect(200)
        .end(function(err,res){
            expect(JSON.parse(res.body.data).firstName).to.eql('sundaresan');
            done(err);
        })
    });
});