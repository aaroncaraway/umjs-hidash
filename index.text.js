const assert = require("assert");
const { forEach, map } = require("./index");

const test = (description, fn) => {
  console.log("----", description);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test("The forEach test", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected to sum correctly to 6");
});

test("The map test", () => {
  let results = [];
  map([1, 2, 3], (value) => {
    results.push(value * 2);
  });

  assert.deepStrictEqual(results, [2, 4, 6]);
  //   assert.strictEqual(results[0], 2);
  //   assert.strictEqual(results[1], 4);
  //   assert.strictEqual(results[2], 6);
});
