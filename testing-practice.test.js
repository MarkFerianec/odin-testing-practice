import { capitalize, reverseString } from './testing-practice';

test('capitalizes first letter', () => {
  expect(capitalize('orange')).toBe('Orange');
  expect(capitalize('car')).toBe('Car');
});

test('reverses a string', () => {
  expect(reverseString('Orange')).toBe('egnarO');
  expect(reverseString('Car')).toBe('raC');
});
