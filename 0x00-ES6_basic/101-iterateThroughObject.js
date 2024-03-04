export default function iterateThroughObject(reportWithIterator) {
  let count = 0
  return reportWithIterator.reduce((acc, curr) => {
    acc = count ? `${acc} | ${curr}` : `${curr}`
    count += 1
    return acc
  }, "")
}