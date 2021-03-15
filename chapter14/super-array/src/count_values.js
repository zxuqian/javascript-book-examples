/**
 *  计算指定每个元素出现次数
 * @param {Array} arr
 * @returns {[[]]} 返回包含元素出现次数数组的数组，例如[[1, 2], [3, 5]] 表示 1出现了2次，3出现了5次。
 */
const count_values = (arr) => [
  ...arr
    .reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map())
    .entries(),
];

export default count_values;
