module.exports.convertToNumber = function (roman) {
  var dictionary = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};

  var cardinal = 0;
  var previousLetterValue = 0;

  roman.split('').reverse().forEach(function (romanLetter) {
    var letterValue = dictionary[romanLetter];

    if (previousLetterValue > letterValue) {
      cardinal -= letterValue;
    } else {
      cardinal += letterValue;
    }
    previousLetterValue = letterValue;
  });

  return cardinal;
}




