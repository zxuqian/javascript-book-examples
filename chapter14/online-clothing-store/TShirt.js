import Clothing from "./Clothing.js";

class TShirt extends Clothing {
  constructor({
    id = "",
    name = "",
    price = 0.0,
    color = "",
    size = "",
    material = "",
    chest = 0,
    sleeve = 0,
  } = {}) {
    super({ id, name, price, color, size, material });
    this.chest = chest;
    this.sleeve = sleeve;
  }
}

export default TShirt;
