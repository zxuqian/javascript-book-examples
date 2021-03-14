import Order from "./Order.js";
import Store from "./Store.js";
import { generateId } from "./utils.js";

class Cart {
  #items = new Map();

  addToCart(clothes) {
    if (this.#items.has(clothes.id)) {
      this.#items.get(clothes.id).count++;
    } else {
      this.#items.set(clothes.id, { item: clothes, count: 1 });
    }
  }

  removeFromCart(id) {}

  displayCartContent() {
    console.table(
      [...this.#items.values()].map((item) => ({
        ...item.item,
        count: item.count,
      })),
      ["name", "price", "color", "size"]
    );
  }

  getTotalPrice() {
    return [...this.#items.values()].reduce(
      (acc, curr) => acc + curr.item.price * curr.count,
      0
    );
  }

  checkout(store, address, user) {
    const newOrder = new Order({
      id: generateId(),
      items: [...this.#items.values()],
      totalPrice: this.getTotalPrice(),
      address,
      user,
    });
    store.orders.push(newOrder);
  }
}

export default Cart;
