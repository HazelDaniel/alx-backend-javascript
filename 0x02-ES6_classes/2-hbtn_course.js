class HolbertonCourse {
  constructor(name, length, students) {
    /* eslint-disable no-underscore-dangle */
    if (typeof name === 'string') this._name = name;
    else HolbertonCourse.genTypeErr('name', 'string');
    if (typeof length === 'number') this._length = length;
    else HolbertonCourse.genTypeErr('length', 'number');
    if (Array.isArray(students)) this._students = students;
    else HolbertonCourse.genTypeErr('students', 'Array');
  }

  static genTypeErr(field, type) {
    const field_ = field[0].toUpperCase() + field.slice(1);
    throw new Error(`TypeError: ${field_} must be a ${type}`);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(otherName) {
    if (typeof otherName !== 'string') HolbertonCourse.genTypeErr('name', 'string');
    this._name = otherName;
  }

  set length(otherLength) {
    if (typeof otherLength !== 'number') HolbertonCourse.genTypeErr('length', 'number');
    this._length = otherLength;
  }

  set students(otherStudents) {
    if (!Array.isArray(otherStudents)) HolbertonCourse.genTypeErr('students', 'array');
    this._students = otherStudents;
  }

  /* eslint-enable no-underscore-dangle */
}

export default HolbertonCourse;
