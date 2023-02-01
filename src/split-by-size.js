const { splitEvery } = require('ramda')

const splitBySize = ({ size, array }) => splitEvery(size, array)

module.exports = {
  splitBySize
}
