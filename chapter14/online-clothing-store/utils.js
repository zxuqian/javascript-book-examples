// 生成随机 id
export function generateId() {
  return Math.floor(Math.random() * (10000000 - 1000000) + 1000000);
}
