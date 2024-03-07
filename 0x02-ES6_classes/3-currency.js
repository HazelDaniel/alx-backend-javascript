class Currency {
  /* eslint-disable no-underscore-dangle */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(otherCode) {
    this._code = otherCode;
  }

  set name(otherName) {
    this._name = otherName;
  }
  /* eslint-enable no-underscore-dangle */
}

export default Currency;
