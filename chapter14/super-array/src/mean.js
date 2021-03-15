import sum from "./sum.js";

/**
 * 计算数组元素的平均值
 * @param {Array<number>} arr
 * @returns {number} 平均值
 */
const mean = (arr) => sum(arr) / arr.length;

export default mean;
