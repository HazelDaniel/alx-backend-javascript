const sliceWith = (mainString, subString) => {
  return mainString.slice(subString.length);
};

function cleanSet(set, startString) {
  let res = '';
  const setArray = Array.from(set);
  if (!startString) return res;
  for (const [i, j] of setArray.entries()) {
    if (!j.startsWith(startString)) return res;
    if (i) {
      res += `-${sliceWith(j, startString)}`;
    } else {
      res = sliceWith(j, startString);
    }
  }

  return res;
}

export default cleanSet;
