const StarPatternBaseOnInput = (input) => {
  if (input) {
    for (var i = 0; i < input; i++) {
      let temp = "";
      const lengthChar = input + 3;
      for (var x = 0; x < lengthChar; x++) {
        if (i + 1 == x || (temp[x - 1] === "*" && temp[x - 2] !== "*")) {
          temp += "*";
        } else {
          temp += x + 1;
        }
      }
      console.log(temp);
    }
  } else {
    console.log("No Input");
  }
};

StarPatternBaseOnInput(4);
