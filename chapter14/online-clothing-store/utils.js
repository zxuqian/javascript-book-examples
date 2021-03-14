// 生成随机 id
export function generateId() {
  return Math.floor(Math.random() * (10000000 - 100000) + 100000);
}
