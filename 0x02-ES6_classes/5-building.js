export default class Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft) {
    this._sqft = sqft;

    if (this.evacuationWarningMessage === undefined && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(otherSqft) {
    this._sqft = otherSqft;
  }

  /* eslint-enable no-underscore-dangle */
}
