var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8081/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8081/' , function(error, response, body) {
                expect(body).to.equal('My Test Node website!!');
                done();
            });
        });
    });

    describe ('APE route', function() {
        it('status', function(done){
            request('http://localhost:8081/ape', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});