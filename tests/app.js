var server = require('supertest');
var should = require('chai').should();
var http = require('http');
var app = require('../app');

describe("API count", function() {
  it ("should return 0, 0" , function(done) {
    server(app)
    .get('/api/count')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      var count = JSON.parse(result.text);

      count.current.should.equal(0);
      count.previous.should.equal(0);

      done();
    })
  })
})

describe("API add", function() {
  it ("should complete successfully" , function(done) {
    server(app)
    .get('/api/add')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      done();
    })
  })

  it ("should have incremented count by 1" , function(done) {
    server(app)
    .get('/api/count')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      var count = JSON.parse(result.text);

      count.current.should.equal(1);
      count.previous.should.equal(0);

      done();
    })
  })
})

describe("API subtract", function() {
  it ("should complete successfully" , function(done) {
    server(app)
    .get('/api/subtract')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      done();
    })
  })

  it ("should have decremented count by 1" , function(done) {
    server(app)
    .get('/api/count')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      var count = JSON.parse(result.text);

      count.current.should.equal(0);
      count.previous.should.equal(1);

      done();
    })
  })
})
