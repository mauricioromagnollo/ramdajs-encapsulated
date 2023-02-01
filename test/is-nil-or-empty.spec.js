const { isNilOrEmpty } = require('../src/is-nil-or-empty')

describe('isNilOrEmpty', () => {
  test('should be empty', () => {
    const NULL = null
    expect(isNilOrEmpty(NULL)).toBeTruthy()
  })
})
