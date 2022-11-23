import { capitalize } from "./capitalize.mjs";

test('capitalizes one letter', () => {
  expect(capitalize('a')).toBe('A')
})

test('capitalize only first letter', () => {
  expect(capitalize('all')).toBe('All')
})
