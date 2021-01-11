// chapter9/regexp1.js
function replacer(match, g1, g2, pos, str, group) {
  console.log(match, g1, g2, pos, str, group);
  return match.toUpperCase();
}

let str = "java and javascript".replace(/(ja)va(\s+|\w+)/g, replacer);
console.log(str);
