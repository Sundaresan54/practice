var server = require('./index.js');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('GET /nonRepeat character', function() {
    it('returns the first non repeating character in a string', function(done) {
        request.get('/nonRepeat?input=sskbbrfrf')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.result).to.eql('k');
                done(err);
            });
    });
});