export default function appendToEachArrayValue(array, appendString) {
  /* eslint-disable indent */
  /* eslint-disable no-param-reassign */

  for (const [idx, value] of array.entries()) {
    array[idx] = appendString + value;
  }

  /* eslint-enable no-param-reassign */
  /* eslint-enable indent */
  return array;
}
