describe('A string', function () {
  let WORD = 'word';
  it('containing 4 letters should have length 4', function () {
    expect(WORD.length == 4).toBe(true);
  });
  it('should be equal to an identical string', function () {
    expect(WORD == 'word').toBe(true);
  });
  it('should have a length greater than 5', function () {
    expect('elephant'.length).toBeGreaterThan(5);
  });
});