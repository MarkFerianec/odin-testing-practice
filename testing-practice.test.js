import { capitalize } from './testing-practice';

test('capitalizes first letter', () => {
  expect(capitalize('orange')).toBe('Orange');
  expect(capitalize('car')).toBe('Car');
});
