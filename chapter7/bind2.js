// chapter/bind2.js
function buildPath(dir, fileName) {
  return `${dir}/${fileName}`;
}

const usr = buildPath.bind(null, "/usr");
console.log(usr("image.jpg")); // /usr/image.jpg
