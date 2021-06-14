import cck from 'cck'

export const validateFullName = (input) => {
  if (input.length < 2) return 'Should be at least 2 characters long'
  return null
}

export const validateEmail = (input) => {
  if (!cck.check(input, 'email')) return 'Incorrect email format'
  return null
}

export const validatePassword = (input) => {
  if (input.length < 8) return 'Use at least 8 characters'
  let uppercasesInPassword = 0
  let passwordContainsSpecialCharacter = false
  for (let char of input) {
    if (['!', '@', '#', '$', '%', '^', '&', '*'].includes(char)) passwordContainsSpecialCharacter = true
    if (char === char.toUpperCase()) uppercasesInPassword ++
  }
  if (!passwordContainsSpecialCharacter) return 'Include at least one special character'
  if (uppercasesInPassword < 2) return 'Include at least two uppercase letters'
  return null
}