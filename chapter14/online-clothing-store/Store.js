import Cart from "./Cart.js";
import TShirt from "./TShirt.js";
import Jeans from "./Jeans.js";
import { generateId } from "./utils.js";
class Store {
  #list = [];
  #orders = [];

  init() {
    const tshirt1 = new TShirt({
      id: generateId(),
      name: "纯棉宽松 T 恤",
      price: 99.0,
      color: "黑色",
      size: "XL",
      material: "纯棉",
      chest: 116,
      sleeve: 30,
    });

    const tshirt2 = new TShirt({
      id: generateId(),
      name: "纯棉修身 T 恤",
      price: 89.0,
      color: "白色",
      size: "L",
      material: "涤纶",
      chest: 112,
      sleeve: 28,
    });

    const jeans1 = new Jeans({
      id: generateId(),
      name: "水洗牛仔裤",
      price: 129.0,
      color: "蓝色",
      size: "30",
      material: "纯棉",
      waist: 77,
      inseam: 99,
    });

    const jeans2 = new Jeans({
      id: generateId(),
      name: "修身牛仔裤",
      price: 159.0,
      color: "黑色",
      size: "31",
      material: "纯棉",
      waist: 79,
      inseam: 101,
    });
    this.#addToList(tshirt1, tshirt2, jeans1, jeans2);
  }

  #addToList(...clothes) {
    this.#list.push(...clothes);
  }

  displayAllClothes() {
    const tshirts = [];
    const jeans = [];
    this.#list.forEach((clothes) => {
      if (clothes instanceof TShirt) {
        tshirts.push(clothes);
      } else if (clothes instanceof Jeans) {
        jeans.push(clothes);
      }
    });
    console.log("上装");
    console.table(tshirts);
    console.log("下装");
    console.table(jeans);
  }

  selectClothes(index) {
    return this.#list[index];
  }

  addNewOrder(order) {
    this.#orders.push(order);
  }

  displayAllOrders() {
    this.#orders.forEach((order) => {
      order.displayOrder();
    });
  }
}

export default Store;
