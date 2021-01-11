// chapter7/getters_setters1.js
const cart = {
  items: ["商品 1", "商品 2", "商品 3"],
  get total() {
    return this.items.length;
  },
};

console.log(cart.total);
cart.total = 5;
console.log(cart.total);
