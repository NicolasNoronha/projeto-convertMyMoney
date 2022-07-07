const convert = require('./convert')

test('convert 4 to 4', () => {
  expect(convert.convert(4, 4)).toBe(16)
})

test('convert cotacao 9 and quantidade 4', () => {
  expect(convert.convert(0, 4)).toBe(16)
})

test('toMoney converts float', () => {
  expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney convert string', () => {
  expect(convert.toMoney('2')).toBe('2.00')
})