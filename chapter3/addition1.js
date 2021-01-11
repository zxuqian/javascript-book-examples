// chapter3/addition1.js
5 + true;                    // 6
5 + null;                    // 5
5 + undefined;               // NaN
5 + {};                      // "5[object Object]"
5 + {valueOf() {return 10}}; // 15
5 + [];                      // "5"