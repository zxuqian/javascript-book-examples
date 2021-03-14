import Clothing from "./Clothing.js";

class Jeans extends Clothing {
  constructor({
    id = "",
    name = "",
    price = 0.0,
    color = "",
    size = "",
    material = "",
    waist = 0,
    inseam = 0,
  } = {}) {
    super({ id, name, price, color, size, material });
    this.waist = waist;
    this.inseam = inseam;
  }
}

export default Jeans;
