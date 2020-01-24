module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(o => o.trim());
};
