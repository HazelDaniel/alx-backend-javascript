export default class HolbertonClass {
  /* eslint-disable no-underscore-dangle */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  /* eslint-enable no-underscore-dangle */
}
