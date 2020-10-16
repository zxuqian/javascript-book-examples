const myData = function data() {
  let arr = [1, 3, 5, 7, 9];
  let index = 0;
  return {
    value() {
      return arr[index];
    },
    next() {
      index = ++index % arr.length;
    },
    pre() {
      index = (--index + arr.length) % arr.length;
    },
  };
};

// const myData = data();
console.log(myData.value());
myData.next();
myData.next();
console.log(myData.value());

myData.pre();
myData.pre();
myData.pre();
console.log(myData.value());
