/* eslint-disable no-unused-vars */
import Currency from './3-currency';
/* eslint-enable no-unused-vars */

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(otherAmount) {
    this._amount = otherAmount;
  }

  set currency(otherCurrency) {
    this._currency = otherCurrency;
  }
  /* eslint-enable no-underscore-dangle */
}
