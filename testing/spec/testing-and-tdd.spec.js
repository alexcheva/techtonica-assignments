const countWords = require('../src/testing-and-tdd.js');

describe('countWords', function () {
  it('should count a single word', function () {
    expect(countWords('a')).toBe(1);
  });

  it('"brown fox jumped over lazy dog" should count a 6 words', function () {
    expect(countWords('brown fox jumped over lazy dog')).toBe(6);
  });
});