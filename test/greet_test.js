'use strict';

var expect = require('chai').expect;
var greet = require('../greet');

describe('greet.js', function() {
  it('should greet by name', function() {
    expect(greet('nick')).to.equals('hello nick');
  });
});
