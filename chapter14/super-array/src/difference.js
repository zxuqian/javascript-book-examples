/**
 * 找到存在于 arr1，但是不存在于 arr2 的元素
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} 差集数组
 */
const difference = (arr1, arr2) => arr1.filter((v) => !arr2.includes(v));

export default difference;
