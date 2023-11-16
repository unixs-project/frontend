export const emailRegex = /^[A-Z0-9._%+-]+@edu\.unisinos\.br$/i
export const passwordRegex = /^(?=.*[A-Z]).{6,}$/

const isEmailValid = email !== '' && !emailRegex.test(email)
const isPasswordValid = password !== '' && !passwordRegex.test(password)
//criar get email e senha valida
