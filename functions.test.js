const { greeting, add, returnTwo } = require("./functions");

test('greeting("Cal") should return Hello, Cal.', () => {
  expect(greeting("Cal")).toBe("Hello, Cal.");
});

test("add(1, 2) should return 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("returnTwo() should return 2", () => {
  expect(returnTwo()).toBe(2);
});
