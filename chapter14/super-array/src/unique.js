/**
 * 获取指定数组所有不重复元素的集合
 * @param {Array} arr
 * @returns {Array}
 */
const unique = (arr) => [...new Set(arr)];

export default unique;
