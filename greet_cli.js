'use strict';

var greet = require('./greet');

var greetCli = module.exports = function(name) {
  return greet(name || process.argv[2]);
};

console.log(greetCli());
