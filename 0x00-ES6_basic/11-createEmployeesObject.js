export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
}
/* eslint-disable eol-last */
