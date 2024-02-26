function calculateArea(input) {
  if (input) {
    if (input.sudut < 3 || input.kordinat.length < 3) {
      return "Invalid input: The number of coordinates must be at least 3";
    } else {
      let area = 0;
      for (let i = 0; i < input.kordinat.length; i++) {
        const x1 = input.kordinat[i][0];
        const y1 = input.kordinat[i][1];
        const x2 = input.kordinat[(i + 1) % input.kordinat.length][0];
        const y2 = input.kordinat[(i + 1) % input.kordinat.length][1];

        area += x1 * y2 - x2 * y1;
      }
      return Math.abs(area / 2);
    }
  } else {
    return "No Input";
  }
}

const input = {
  sudut: 6,
  kordinat: [
    [0, 0],
    [0, 3],
    [3, 3],
    [3, 1],
    [4, 1],
    [4, 0],
  ],
};
console.log(calculateArea(input));
