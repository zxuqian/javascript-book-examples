import Order from "./Order.js";
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

  displayCartContent() {
    console.table(
      [...this.#items.values()].map((item) => ({
        ...item.item,
        count: item.count,
      })),
      ["name", "price", "color", "size", "count"]
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
    store.addNewOrder(newOrder);
  }
}

export default Cart;
