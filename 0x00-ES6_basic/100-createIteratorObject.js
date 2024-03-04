export default function createIteratorObject(report) {
  /* eslint-disable indent */
  /* eslint-disable no-param-reassign */

  return Object.values(report.allEmployees).reduce((acc, curr) => {
    acc = [...acc, ...curr];
    return acc;
  }, []);

  /* eslint-enable no-param-reassign */
  /* eslint-enable indent */
}
