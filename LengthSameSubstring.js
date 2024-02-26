const LengthSameSubstring = (input) => {
  let returnVar = [];
  let indexAt = null;
  if (input) {
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        returnVar.push({
          char: input[i],
          munch: 1,
        });
        indexAt = returnVar.length - 1;
      } else {
        if (input[i] === input[i - 1]) {
          returnVar[indexAt] = {
            ...returnVar[indexAt],
            munch: returnVar[indexAt].munch + 1,
          };
        } else {
          returnVar.push({
            char: input[i],
            munch: 1,
          });
          indexAt = returnVar.length - 1;
        }
      }
    }
    returnVar.map((obj) => console.log(obj.char + " = " + obj.munch));
  } else {
    console.log("No Input");
  }
};

LengthSameSubstring("aaabbcccaaaac");
