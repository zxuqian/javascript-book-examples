function joinStrings(seperator, ...strs) {
  return strs.join(seperator);
}

console.log(joinStrings(", ", "react", "node"));
