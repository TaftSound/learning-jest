
function isLetter (char) {
  const regex = /[a-z]/i
  return regex.test(char)
}
function convertToCharCodes (string) {
  const charCodeArray = []
  for (let i = 0; i < string.length; i++) {
    if (!isLetter(string[i])) {
      charCodeArray.push(string[i])
      continue
    }
    charCodeArray.push(string.charCodeAt(i))
  }
  return charCodeArray
}
function shiftCharCodes (charCodeArray) {
  for (const code in charCodeArray) {
    if (Number.isInteger(charCodeArray[code])) {
      charCodeArray[code] = charCodeArray[code] + 1
    }
  }
  return charCodeArray
}
function convertFromCharCodes (charCodeArray) {
  let string = ''
  for (const code in charCodeArray) {
    if (Number.isInteger(charCodeArray[code])) {
      string += String.fromCharCode(charCodeArray[code])
      continue
    }
    string += charCodeArray[code]
  }
  return string
}

export const caesarCipher = {
  encode: (string) => {
    const charCodeArray = convertToCharCodes(string)
    const shiftedCodeArray = shiftCharCodes(charCodeArray)
    const shiftedString = convertFromCharCodes(shiftedCodeArray)
    return shiftedString
  }
}
