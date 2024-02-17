import { capitalize, reverseString, calculator } from './testing-practice';

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
