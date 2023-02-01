const { pluck, uniq } = require('ramda')

const getArrayOfValuesFromKey = ({ key, list, unique = false }) => {
  const values = pluck(key, list)
  return unique ? uniq(values) : values
}

module.exports = {
  getArrayOfValuesFromKey
}
