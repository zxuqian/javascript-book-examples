/**
 * 返回指定起始数字（包括）到结束数字（不包括）的范围数组
 * @param {number} start 起始数字
 * @param {number} end 结束数字
 * @returns {Array<number>} 范围数组
 */
const range = (start, end) =>
  [...Array(end - start).keys()].map((i) => i + start);

export default range;
