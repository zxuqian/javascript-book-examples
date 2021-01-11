// chapter5/varargs1.js
function joinStrings(seperator) {
  let result = "";
  for (let i = 1; i < arguments.length; i++) {
    if (i > 1) {
      result += seperator;
    }
    result += arguments[i];
  }
  return result;
}

console.log(joinStrings(", ", "react", "node"));
