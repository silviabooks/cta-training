const { describe, expect, it } = require("@jest/globals");
const { multiply } = require("./multiply");

// Describe the requirements of the feature
describe("Multiply", () => {
  // Add the test cases
  it("should return correct result with non-zero inputs", () => {
    const num1 = 2;
    const num2 = 4;
    const expectedResult = 8;

    const actualResult = multiply(num1, num2);
    expect(actualResult).toBeTruthy();
    expect(actualResult).toBe(expectedResult);
  });

  it("should return correct result with zero inputs", () => {
    const actualResult = multiply(0, 0);
    expect(actualResult).toBe(0);
  });

  it("should return correct result with only one zero input", () => {
    const actualResult = multiply(0, 5);
    expect(actualResult).toBe(0);
  });
});
