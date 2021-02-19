const invert = require('../jasmine-pair-activity');

describe('invert', function () {
  it("should return true", function () {
    expect(true).toEqual(true);
  });

  it("should return an empty object", function () {
    expect({}).toEqual({});
  });

  it("should return an inverted empty object", function () {
    expect(invert({})).toEqual({});
  });

  it("should return inverted key value", function () {
    let object0 = { 'a': 1 };
    expect(invert(object0)).toEqual({ '1': 'a' });
  });

  it("should return inverted key values", function () {
    let object0 = { 'a': 1, 'b': 2 };
    expect(invert(object0)).toEqual({ '1': 'a', '2': 'b' });
  });

  it("should return { '1': 'c', '2': 'b' }", function () {
    let object = { 'a': 1, 'b': 2, 'c': 1 };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });
});