// chapter7/apply1.js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push.apply(arr1, arr2);
arr1; // [ 1, 2, 3, 4, 5, 6 ]
