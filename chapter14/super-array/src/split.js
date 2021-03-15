import range from "./range.js";

/**
 * 把指定数组按指定大小分割成若干子数组。
 * @param {Array} arr 指定数组
 * @param {number} size 每个子数组有多少个元素
 * @returns [[]] 返回包含分割后的子数组的数组
 */
const split = (arr, size) =>
  range(0, Math.ceil(arr.length / size)).map((i) =>
    arr.slice(i * size, i * size + size)
  );

export default split;
