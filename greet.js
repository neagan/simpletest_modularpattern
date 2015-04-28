#!/usr/bin/env node

'use strict';

var greet = module.exports = function(name) {
  return 'hello ' + name;
};

console.log(greet(process.argv.slice(2,3)));
