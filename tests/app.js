var server = require('supertest');
var should = require('chai').should();
var app = require('../app');

describe("Index", function() {
  it ("should pass" , function(done) {
    server(app)
    .get('/')
    .end(function(err, res) {
      if (err) done(err);
      res.status.should.equal(200);
      res.body.status.should.equal("success");

      done();
    })
  })
})
