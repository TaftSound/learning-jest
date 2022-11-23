import { caesarCipher } from "./caesar-cipher.mjs";

test('encode letter a', () => {
  expect(caesarCipher.encode('a')).toBe('b')
})
test('encode two letter word', () => {
  expect(caesarCipher.encode('ad')).toBe('be')
})
test('encode five letter word', () => {
  expect(caesarCipher.encode('works')).toBe('xpslt')
})
test('encode with capitals', () => {
  expect(caesarCipher.encode('Works')).toBe('Xpslt')
})
test('encode with punctuation', () => {
  expect(caesarCipher.encode('Works, well')).toBe('Xpslt, xfmm')
})