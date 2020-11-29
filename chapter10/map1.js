let map = new Map();
map.set("a", 1); // key 为字符串
map.set(() => {}, true); // key 为函数
map.set(undefined, "empty"); // key 为 undefined
map.set(null, () => {}); // key 为 null
map.set({ prop: "value" }, null); // key 为 object
map.set("a", 2); // 覆盖已有的 key "a"
console.log(map); // {"a" => 2, ƒ => true, undefined => "empty", null => ƒ, {…} => null}
console.log(map.size);
