/**
 * 计算两个数组元素的交集
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} 交集结果数组
 */
const intersection = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));
export default intersection;
