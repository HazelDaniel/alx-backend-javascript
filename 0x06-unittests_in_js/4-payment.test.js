#!/usr/bin/node
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi prints to the stdout with the right arguments', () => {
    const baseSpy = sinon.spy(console);
    const dummy = sinon.stub(Utils, 'calculateNumber');

    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(baseSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(baseSpy.log.callCount).to.be.equal(1);
    dummy.restore();
    baseSpy.log.restore();
  });
});
