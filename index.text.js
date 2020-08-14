const { forEach, map } = require("./index");

let sum = 0;
forEach([1, 2, 3], (value) => {
  sum += value;
});

if (sum !== 6) {
  throw new Error("Expected sum to equal 6");
}

let results = [];
map([1, 2, 3], (value) => {
  results.push(value * 2);
});

if (results[0] !== 2) {
  throw new Error("nope!");
}

if (results[1] !== 4) {
  throw new Error("nope!");
}

if (results[2] !== 6) {
  throw new Error("nope!");
}
