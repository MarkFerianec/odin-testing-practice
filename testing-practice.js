function capitalize(string) {
  let capitalizedFirstLetter = string[0].toUpperCase();
  let restOfString = string.slice(1);
  let newString = (capitalizedFirstLetter += restOfString);
  return newString;
}

function reverseString(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

let calculator = {
  add: function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  subtract: function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  },
  divide: function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  },
  multiply: function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  },
};

export { capitalize, reverseString, calculator };
