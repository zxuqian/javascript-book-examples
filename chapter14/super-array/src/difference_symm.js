import difference from "./difference.js";

/**
 * 找到存在于 arr1，但是不存在于 arr2 的元素，以及存在于 arr2 但不存在于 arr1 中的元素（对称差集）。
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} 对称差集结果数组。
 */
const difference_symm = (arr1, arr2) => [
  ...difference(arr1, arr2),
  ...difference(arr2, arr1),
];

export default difference_symm;
