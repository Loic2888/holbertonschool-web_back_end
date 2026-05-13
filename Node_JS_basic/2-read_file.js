export default function countStudents(path) {
  const fs = require('fs');

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      for (let i = 1; i < lines.length; i++) {
        const [name, field] = lines[i].split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(name);
      }

      const totalStudents = lines.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      for (const field in students) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }

      resolve();
    });
  });
}
