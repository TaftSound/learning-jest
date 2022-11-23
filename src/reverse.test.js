import { reverseString } from './reverse.mjs'

test('returns single letter', () => {
  expect(reverseString('A')).toBe('A')
})
test('reverse two letters', () => {
  expect(reverseString('Ab')).toBe('bA')
})
test('reverse three letters', () => {
  expect(reverseString('Aba')).toBe('abA')
})
test('reverse four letters', () => {
  expect(reverseString('food')).toBe('doof')
})
test('works with spaces', () => {
  expect(reverseString('Food is good')).toBe('doog si dooF')
})