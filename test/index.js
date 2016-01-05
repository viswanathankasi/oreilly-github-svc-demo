'use strict';

var hackerCase = require('../index');
var expect = require('chai').expect;

describe('hackerCase', function() {
  it('must properly transform a single word, starting in uppercase', function() {
    expect(hackerCase('lovely')).to.equal('LoVeLy');
  });

  it('must work independently of the original case', function() {
    expect(hackerCase('LOVELY')).to.equal('LoVeLy');
  });

  it('must not maintain state outside of calls', function() {
    expect(hackerCase('ron')).to.equal('RoN');
    expect(hackerCase('weasley')).to.equal('WeAsLeY');
  });

  it('must not toggle case on whitespace, waiting for word characters', function() {
    expect(hackerCase('delicious insights')).to.equal('DeLiCiOuS iNsIgHtS');
  });

  it('must not break on an empty string', function() {
    expect(hackerCase('')).to.equal('');
  });
});
