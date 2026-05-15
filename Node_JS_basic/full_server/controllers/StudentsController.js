import { resolve } from 'path';
import readDatabase from '../utils';

const DB = process.argv[2] || resolve(__dirname, '../../database.csv');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(DB)
      .then((students) => {
        let result = 'This is the list of our students';
        for (const [key] of Object.entries(students).sort()) {
          result += `\nNumber of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`;
        }
        response.status(200).send(result);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(DB)
      .then((students) => {
        if (!Object.keys(students).includes(request.params.major)) {
          response.status(500).send('Major parameter must be CS or SWE');
          return;
        }
        const list = students[request.params.major].join(', ');
        response.status(200).send(`List: ${list}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
