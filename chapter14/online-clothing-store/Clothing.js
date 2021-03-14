class Clothing {
  constructor({
    id = 0,
    name = "",
    price = 0.0,
    color = "",
    size = "",
    material = "",
  } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.color = color;
    this.size = size;
    this.material = material;
  }
}

export default Clothing;
