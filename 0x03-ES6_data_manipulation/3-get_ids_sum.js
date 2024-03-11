function getStudentIdsSum(students) {
  return students.reduce((acc, curr) => {
    const tmp = acc + curr.id;
    return tmp;
  }, 0);
}

export default getStudentIdsSum;
