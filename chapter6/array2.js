// chapter6/array2.js
let stack = [];
stack.push(1, 2, 3); // 3，stack：[1, 2, 3]
stack.pop(); // 3
stack; // stack：[1, 2]
stack[stack.length - 1]; // 2，查看栈顶元素

let queue = [];
queue.unshift(1, 2, 3); // 3，queue: [1, 2, 3]
queue.shift(); // 1，queue: [2, 3]
queue[0]; // 2，查看队首元素
