export default class Airport {
  /* eslint-disable no-underscore-dangle */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
  /* eslint-enable no-underscore-dangle */
}
