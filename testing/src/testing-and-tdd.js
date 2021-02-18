const countWords = function (sentence) {
  return sentence.split(' ').length;
};
console.log(countWords('brown fox jumped over lazy dog'));

module.exports = countWords;