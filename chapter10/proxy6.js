let obj = {
  a: 1,
  _b: 2,
  get B() {
    return this._b;
  },
  set B(value) {
    this._b = value;
  },
  sum(c) {
    return this.a + this._b + c;
  },
};
obj = new Proxy(obj, {
  get(target, propName, receiver) {
    console.log(`obj: 访问属性 ${propName}`);
    return Reflect.get(target, propName, receiver);
  },
  set(target, propName, value, receiver) {
    console.log(
      `obj: 修改属性 ${propName}，旧值为 ${target[propName]}，新值为 ${value}`
    );
    return Reflect.set(target, propName, value, receiver);
  },
  apply(target, thisArg, args) {
    console.log(
      `obj: 调用了方法 ${target}，this 为 ${thisArg}，参数列表为 ${args}`
    );
    return Reflect.apply(target, thisArg, args);
  },
});

obj.a;
obj.a = 5;
obj.b;
obj.b = 8;
console.log(obj.sum(10));
Reflect.apply(obj.sum, obj, [10]);
