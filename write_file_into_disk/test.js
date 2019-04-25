var server = require('./index');
var expect =  require('chai').expect;
var supertest =  require('supertest');
var request = supertest(server);

describe('POST /write disk', function(){
    it('returns data in json file',function(done){
        request.post('/writeDisk')
        .send({firstName:"sundaresan",lastName:"venugopal"})
        .expect(200)
        .end((err,res)=> {
            expect(res.text).to.eql("data written to the disk");
            done(err);
        })

    });
});