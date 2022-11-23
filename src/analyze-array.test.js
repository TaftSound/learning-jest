import { analyzeArray } from "./analyze-array.mjs";

test('Returns object', () => {
  expect(analyzeArray([1, 3, 6])).toBeInstanceOf(Object)
})
test('Returns average', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('avg', 3)
})
test('Returns min', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('min', 1)
})
test('Returns max', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('max', 5)
})
test('Returns length', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('length', 3)
})
test('returns all properties', () => {
  const answer = analyzeArray([3, 7, 8, 2, 9])
  expect(answer).toHaveProperty('avg', 5.8)
  expect(answer).toHaveProperty('min', 2)
  expect(answer).toHaveProperty('max', 9)
  expect(answer).toHaveProperty('length', 5)
})