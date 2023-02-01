const { getArrayOfValuesFromKey } = require('../src/get-array-of-values-from-key')

describe('getArrayOfValuesFromKey', () => {
  test('should return an array of values', () => {
    const array = [
      { foo: 1, bar: 'any' },
      { foo: 2, bar: 'any' },
      { foo: 3, bar: 'any' },
      { foo: 3, bar: 'any' },
    ]

    const result = getArrayOfValuesFromKey({ list: array, key: 'foo' })
    expect(result).toEqual([1, 2, 3, 3])

    const resultUniq = getArrayOfValuesFromKey({ list: array, key: 'foo', unique: true })
    expect(resultUniq).toEqual([1, 2, 3])
  })
})
