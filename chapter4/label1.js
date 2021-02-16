outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 8; j++) {
    if (j === 3) {
      break outer;
    }
    console.log(i + j);
  }
}
