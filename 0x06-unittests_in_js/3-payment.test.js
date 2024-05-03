#!/usr/bin/node
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi tests the output of calculateNumber method of Utils module', () => {
    const baseSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(baseSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(baseSpy.calculateNumber.callCount).to.be.equal(1);
    baseSpy.calculateNumber.restore();
  });
});
