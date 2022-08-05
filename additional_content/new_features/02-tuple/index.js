const tuple = #[1, 2, 3, 4];
console.log(tuple);
// 访问 tuple 的值
console.log(tuple[0]);

// 不能直接修改 tuple的值
// tuple[0] = 5;
// console.log(tuple);

// 可以使用 with()
const newTuple = tuple.with(0, 5);
console.log(newTuple, newTuple === tuple);

// 也可以使用 array 方法
console.log(tuple.map((x) => x * 2));

// 或者使用 spread 运算符，注意 tuple 里只能包含tuple 和record类型
const newTuple2 = #[...tuple, 5];
// const newTuple2 = #[...tuple, 5, [6, 7]]; // 错误
console.log(newTuple2);

// 也可以解构赋值

const [a, b] = tuple;
console.log(a, b);
