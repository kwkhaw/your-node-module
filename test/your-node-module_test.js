'use strict';

var myModule = require('../lib/your-node-module.js');
require('chai').should();

describe('your-node-module', function () {
  it('should return awesome', function () {
    myModule.awesome().should.equal('awesome');
  });
});
