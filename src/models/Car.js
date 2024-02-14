import Validator from '../utils/Validator';

class Car {
  constructor(carName) {
    this.#validate(carName);
  }

  #validate(carName) {
    Validator.isValidCarNameLengthRange(carName);
  }
}

export default Car;