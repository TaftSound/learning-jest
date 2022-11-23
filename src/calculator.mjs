export const calculator = {
  add: (x, y) => {
    return x + y
  },
  subtract: (x, y) => {
    return x - y
  },
  multiply: (x, y) => {
    return x * y
  },
  divide: (x, y) => {
    if (x === 0 || y === 0) { return 0 }
    return x / y
  }
}
