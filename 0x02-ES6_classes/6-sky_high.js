import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(otherFloors) {
    this._floors = otherFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  /* eslint-enable no-underscore-dangle */
}
