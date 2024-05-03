const assert = require('assert');
const calculateNumber = require('./0-calcul');
/*
* a test suite for the module export 'calculateNumber'
* */

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('test with rounding down', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('test with rounding down both operands', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('test with rounding down and truncating first and second operands', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('test with rounding up second operand', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('test with rounding up both operands', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('test with rounding up and truncating first and second operands', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('test with rounding down first and rounding up second operands', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

});

