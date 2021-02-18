const fizzBuzz = require('../src/fizzBuzz');
describe('fizzBuzz', function () {
  it('"fizzBuzz" return value should be defined', function () {
    expect(fizzBuzz).toBeDefined();
  });
  it("should return 'fizz' when given a multiple of 3", function () {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
    it("should return 'buzz' when given a multiple of 3", function () {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return 'FizzBuzz' when given a multiple of 3", function () {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});