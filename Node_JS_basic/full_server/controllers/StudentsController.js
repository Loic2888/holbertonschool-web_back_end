import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        const sortedFields = Object.keys(students).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        const lines = [
          'This is the list of our students',
          ...sortedFields.map(
            (field) =>
              `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`
          ),
        ];

        response.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((students) => {
        const list = students[major] || [];
        response.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
