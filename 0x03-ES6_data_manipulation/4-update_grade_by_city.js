function updateStudentGradeByCity(students, city, newGrades) {
  const gradeHash = newGrades.reduce((acc, curr) => {
    acc[curr.studentId] = curr.grade;
    return acc;
  }, {});

  return students.filter((student) => student.location === city).map((el) => {
    if (!(el.id in gradeHash)) {
      return { ...el, grade: 'N/A' };
    }
    return { ...el, grade: gradeHash[el.id] };
  });
}

export default updateStudentGradeByCity;
