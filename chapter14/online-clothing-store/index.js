import Store from "./Store.js";
import User from "./User.js";

const store = new Store();
store.init();

console.log("===========================================");
console.log("本店所有衣服列表：");
console.log("===========================================");
store.displayAllClothes();

const user = new User({
  username: "test",
  password: "123456",
  mobilePhone: "12345678901",
});

const myCart = user.getCurrentCart();
myCart.addToCart(store.selectClothes(0));
myCart.addToCart(store.selectClothes(0));
myCart.addToCart(store.selectClothes(2));

console.log("\n===========================================");
console.log("购物车内容：");
console.log("===========================================");
myCart.displayCartContent();
console.log("===========================================");
console.log(`总计：￥${myCart.getTotalPrice()}`);
console.log("===========================================");

user.addShippingAddress({
  name: "张三",
  province: "河北",
  city: "石家庄",
  address: "XX 路 XX 街 XX 号",
  mobilePhone: "21365498712",
});

user.checkout(store, user.shippingAddresses[0]);

console.log("\n\n订单信息");
console.log("-------------------------------------------");
store.displayAllOrders();
