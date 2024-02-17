import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './testing-practice';

test('capitalizes first letter', () => {
  expect(capitalize('orange')).toBe('Orange');
  expect(capitalize('car')).toBe('Car');
});

test('reverses a string', () => {
  expect(reverseString('Orange')).toBe('egnarO');
  expect(reverseString('Car')).toBe('raC');
});

test('a basic calculator', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(3, 1)).toBe(2);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('takes an array of numbers and returns an object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([3, 5, 1, 10, 7])).toEqual({
    average: 5.2,
    min: 1,
    max: 10,
    length: 5,
  });
});
