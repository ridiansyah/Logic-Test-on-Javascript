const capitalWord = (input) => {
  let returnVar = [];
  if (input) {
    for (var i = 0; i < input.length; i++) {
      let tempInput = input.toLowerCase();
      for (var a = 0; a < tempInput.length; a++) {
        if (a === i) {
          tempInput =
            tempInput.slice(0, a) +
            tempInput[a].toUpperCase() +
            tempInput.slice(a + 1, tempInput.length);
        }
      }
      returnVar[i] = tempInput;
    }
    return returnVar;
  } else {
    return returnVar;
  }
};

console.log(capitalWord("nabati"));
console.log("================================================");
console.log(capitalWord("NABATI"));
