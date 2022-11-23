import { calculator } from "./calculator.mjs";

test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3)
})
test('adds two floating point numbers', () => {
  expect(calculator.add(1.2, 2.7)).toBeCloseTo(3.9)
})
test('adds with negative numbers', () => {
  expect(calculator.add(1, -5)).toBe(-4)
})
test('subtract number from another', () => {
  expect(calculator.subtract(1, 5)).toBe(-4)
})
test('subtract floating point', () => {
  expect(calculator.subtract(1.1, 5.7)).toBeCloseTo(-4.6)
})
test('subtract with negative numbers', () => {
  expect(calculator.subtract(1, -5)).toBe(6)
})
test('multiply two numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10)
})
test('multiply with 0', () => {
  expect(calculator.multiply(0, 5)).toBe(0)
})
test('multiply with negative', () => {
  expect(calculator.multiply(-3, 5)).toBe(-15)
})
test('divide two numbers', () => {
  expect(calculator.divide(15, 5)).toBe(3)
})
test('divide with negatives', () => {
  expect(calculator.divide(15, -5)).toBe(-3)
})
test('divide with floating point', () => {
  expect(calculator.divide(15, .5)).toBe(30)
})
test('protect from 0', () => {
  expect(calculator.divide(15, 0)).toBe(0)
  expect(calculator.divide(0, 15)).toBe(0)
})