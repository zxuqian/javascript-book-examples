import unique from "./unique.js";

/**
 * 计算两个数组的并集，重复元素只包含一次。
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} 返回并集结果数组
 */
const union = (arr1, arr2) => unique([...arr1, ...arr2]);

export default union;
