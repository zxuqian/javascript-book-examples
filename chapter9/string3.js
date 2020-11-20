let str = "hello world";
let search = "o";
let result = [];
let index = str.indexOf(search);
while (index > -1) {
  result.push(index);
  index = str.indexOf(search, index + 1);
}

console.log(result);
