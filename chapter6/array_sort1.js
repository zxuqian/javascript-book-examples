// chapter6/array_sort1.js
[82, 71, 99, 4, 10, 120].sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}); // [4, 10, 71, 82, 99, 120]
