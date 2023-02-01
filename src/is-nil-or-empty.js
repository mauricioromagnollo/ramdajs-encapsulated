const { isNil, isEmpty } = require('ramda')

const isNilOrEmpty = (value) => (isNil(value) || isEmpty(value))

module.exports = {
  isNilOrEmpty
}
