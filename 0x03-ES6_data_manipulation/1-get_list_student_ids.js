function getListStudentIds(students) {
  if (!students || !(Array.isArray(students))) return [];
  return (students.map((el) => el.id));
}

export default getListStudentIds;
