export const reverseString = (string) => {
  if (string.length < 2) {
    return string
  }
  return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
}
