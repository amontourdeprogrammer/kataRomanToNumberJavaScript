var assert = require('assert');
var Roman = require('../Roman');

describe('Convert roman to number ', function() {

  it('I give 1', function() {
    assert.equal(1, Roman.convertToNumber('I'));
  });

  it('V give 5', function() {
    assert.equal(5, Roman.convertToNumber('V'));
  });

  it('VI give 6', function() {
    assert.equal(6, Roman.convertToNumber('VI'));
  });

  it('IV give 4', function() {
    assert.equal(4, Roman.convertToNumber('IV'));
  });

  it('MCMLXXVII give 1977', function() {
    assert.equal(1977, Roman.convertToNumber('MCMLXXVII'));
  });

});



