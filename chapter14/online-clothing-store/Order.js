class Order {
  constructor({ id = 0, items = [], totalPrice, address, user } = {}) {
    this.id = id;
    this.items = items;
    this.totalPrice = totalPrice;
    this.address = address;
    this.user = user;
  }

  displayOrder() {
    console.log(`id：\t\t${this.id},
商品：\t\t${this.#getOrderItemsDesc(this.items).join("\n\t\t")}
配送地址：\t${this.address.fullAddress}
收货人： \t${this.address.name}
电话：  \t${this.address.mobilePhone}

总价：\t\t￥${this.totalPrice}
          `);
  }

  #getOrderItemsDesc(orderItems) {
    return orderItems.map(
      (orderItem) =>
        `名称：${orderItem.item.name}\t尺码：${orderItem.item.size}\t数量：${orderItem.count}`
    );
  }
}

export default Order;
