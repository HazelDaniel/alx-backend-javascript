export default class Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* eslint-disable class-methods-use-this */
  cloneCar() {
    return new this.constructor();
  }
  /* eslint-enable class-methods-use-this */
  /* eslint-enable no-underscore-dangle */
}
