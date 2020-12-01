let int16arr = new Int16Array(2);
int16arr[0] = 236;
int16arr[1] = 13;
int16arr; // [236, 13]
let int8arr = new Int8Array(int16arr);
int8arr; // [-20, 13]
