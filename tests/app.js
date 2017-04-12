var server = require('supertest');
var should = require('chai').should();
var expect = require('chai').expect();
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
    .get('/api/set?count=0')
    .end(function(error, result) {
      if (error) {
        done(error);
      }
    });

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

describe("API double", function() {
  it ("should complete successfully" , function(done) {
    server(app)
    .get('/api/set?count=5')
    .end(function(error, result) {
      if (error) {
        done(error);
      }
    });

    server(app)
    .get('/api/double')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      done();
    })
  })

  it ("should have doubled count from 5 to 10" , function(done) {
    server(app)
    .get('/api/count')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      var count = JSON.parse(result.text);

      count.current.should.equal(10);
      count.previous.should.equal(5);

      done();
    })
  })
})

describe("API halve", function() {
  it ("should complete successfully" , function(done) {
    server(app)
    .get('/api/set?count=10')
    .end(function(error, result) {
      if (error) {
        done(error);
      }
    });

    server(app)
    .get('/api/halve')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      done();
    })
  })

  it ("should have halved count from 10 to 5" , function(done) {
    server(app)
    .get('/api/count')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      var count = JSON.parse(result.text);

      count.current.should.equal(5);
      count.previous.should.equal(10);

      done();
    })
  })
})

describe("API set", function() {
  it ("should complete successfully" , function(done) {
    server(app)
    .get('/api/set?count=42')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      done();
    })
  })

  it ("should throw an eror given a string", function(done) {
    server(app)
    .get('/app/set?count=string')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(404);

      done();
    })
  })

  it ("should have set count to 42" , function(done) {
    server(app)
    .get('/api/count')
    .end(function(error, result) {
      if (error) {
        done(error);
      }

      result.status.should.equal(200);

      var count = JSON.parse(result.text);

      count.current.should.equal(1);

      done();
    });
  })
})
