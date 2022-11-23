const getAverage = (array) => {
  const sum = array.reduce((previous, current) => previous + current)
  const average = sum / array.length
  return average
}

export const analyzeArray = (array) => {
  const avg = getAverage(array)
  const min = Math.min(...array)
  const max = Math.max(...array)
  const length = array.length
  return { avg, min, max, length }
}
