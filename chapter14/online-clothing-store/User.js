import Address from "./Address.js";
import Cart from "./Cart.js";
import Store from "./Store.js";
import { generateId } from "./utils.js";
class User {
  #cart = new Cart();
  constructor({ username = "", password = "", mobilePhone = "" }) {
    this.username = username;
    this.password = password;
    this.mobilePhone = mobilePhone;
    this.shippingAddresses = [];
  }

  getCurrentCart() {
    return this.#cart;
  }

  addShippingAddress({ name, province, city, address, mobilePhone }) {
    this.shippingAddresses.push(
      new Address({
        id: generateId(),
        name,
        province,
        city,
        address,
        mobilePhone,
      })
    );
  }

  checkout(store, address) {
    this.#cart.checkout(store, address, this);
  }
}

export default User;
