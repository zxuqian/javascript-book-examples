import {
  difference,
  difference_symm,
  intersection,
  mean,
  range,
  union,
  split,
  unique,
  count_values,
  sum,
} from "./index.js";

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [3, 6, 3, 5, 9, 8, 2, 0, 1];

const log = (v) => console.log(JSON.stringify(v));

log(unique(arr2));
log(intersection(arr1, arr2));
log(union(arr1, arr2));
log(difference(arr1, arr2));
log(difference_symm(arr1, arr2));
log(sum(arr1));
log(mean(arr1));
log(range(5, 10));
log(split(arr2, 4));

const arr3 = [1, 3, 5, 5, 5, 3, 2, 2, 1, 1, 0, 5];
log(count_values(arr3));
