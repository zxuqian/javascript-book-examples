const mp3FilePattern = {
  [Symbol.match](str) {
    return str.endsWith(".mp3");
  },
};

let res = "song.mp3".match(mp3FilePattern);
let res2 = "text.txt".match(mp3FilePattern);
console.log(res, res2); // true false
