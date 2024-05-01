const fs = require('fs');


const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};

		const dbAttrNames = fileLines[0].split(',');
		const studentPropNames = dbAttrNames.slice(0, dbAttrNames.length - 1);

		for (const line of fileLines.slice(1)) {
			const studentRecord = line.split(',');
			const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
			const field = studentRecord[studentRecord.length - 1];
			if (!Object.keys(studentGroups).includes(field)) {
				studentGroups[field] = [];
			}
			const studentEntries = studentPropNames
				.map((propName, idx) => [propName, studentPropValues[idx]]);
			studentGroups[field].push(Object.fromEntries(studentEntries));
		}

		const resStudents = Object
			.values(studentGroups)
			.reduce((acc, cur) => (acc || []).length + cur.length);
		console.log(`Number of students: ${resStudents}`);

		for (const [field, group] of Object.entries(studentGroups)) {
			const studentNames = group.map((student) => student.firstname).join(', ');
			console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
		}
			resolve(true);
		}
  });
});

module.exports = countStudents;
