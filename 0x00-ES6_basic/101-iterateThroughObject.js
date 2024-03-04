export default function iterateThroughObject(reportWithIterator) {
  let count = 0;

  /* eslint-disable indent */
  /* eslint-disable no-param-reassign */
  return reportWithIterator.reduce((acc, curr) => {
    acc = count ? `${acc} | ${curr}` : `${curr}`;
    count += 1;
    return acc;
  }, '');
  /* eslint-enable no-param-reassign */
  /* eslint-enable indent */
}
