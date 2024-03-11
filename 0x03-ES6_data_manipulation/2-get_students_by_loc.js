function getStudentsByLocation(students, city) {
  if (!students || !(Array.isArray(students))) return [];
  return students.filter((el) => el.location === city);
}

export default getStudentsByLocation;
