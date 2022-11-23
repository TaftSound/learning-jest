export const capitalize = (string) => {
  const firstLetter = string.charAt(0)
  string = string.replace(firstLetter, firstLetter.toUpperCase())
  return string
}
