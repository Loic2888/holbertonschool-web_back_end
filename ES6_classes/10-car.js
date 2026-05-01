// 10-car.js

const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Méthode "privée" de clonage, utilisable par les classes enfants
  [cloneSymbol]() {
    // this.constructor permet de conserver la classe d'héritage (TestCar, etc.)
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    // On délègue au symbole pour respecter l'indice "Symbols in ES6"
    return this[cloneSymbol]();
  }
}
