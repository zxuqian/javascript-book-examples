class Order {
  constructor({ id = 0, items = [], totalPrice, address, user } = {}) {
    this.id = id;
    this.items = items;
    this.totalPrice = totalPrice;
    this.address = address;
    this.user = user;
  }
}

export default Order;
