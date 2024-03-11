function hasValuesFromArray(set, array) {
  return !!array.reduce((acc, curr) => {
    let tmp = 0;
    if (set.has(curr)) tmp = acc + 1;
    return tmp;
  }, 0);
}

export default hasValuesFromArray;
