const sleep_in = require('../src/sleeping-in');
sleep_in(false, false)
// true
sleep_in(true, false)
// false
sleep_in(false, true)
// true
sleep_in(true, true)
// true
describe('sleep_in', function () {
  it('"sleep_in" should be defined', function () {
    expect(sleep_in).toBeDefined();
  });
  it("should return 'true'", function () {
    expect(sleep_in(false, false)).toBeTruthy();
    expect(sleep_in(false, true)).toBeTruthy();
    expect(sleep_in(true, true)).toBeTruthy();
  });
    it("should return 'false'", function () {
    expect(sleep_in(true, false)).toBeFalsy();
  });
});