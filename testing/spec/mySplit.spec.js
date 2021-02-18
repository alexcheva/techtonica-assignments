const mySplit = require('../src/mySplit');
describe('mySplit', function () {
  it('"mySplit" should be defined', function () {
    expect(mySplit).toBeDefined();
  });
  it("should return 'true'", function () {
    expect(mySplit("dog")).toContain("d","o","g");
    expect(mySplit("cat")).toBeTruthy("c","a","t");
  });
});