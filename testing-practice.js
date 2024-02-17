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

function caesarCipher(string) {}

function analyzeArray(array) {
  let average = 0;
  let min = array[0];
  let max = array[0];
  let length = array.length;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }

    average += array[i];
  }
  average = average / array.length;
  return { average: average, min: min, max: max, length: length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
