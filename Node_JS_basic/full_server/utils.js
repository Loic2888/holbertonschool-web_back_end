import { readFile } from 'fs';

const readDatabase = (filePath) =>
  new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const [header, ...rows] = data.trim().split('\n');
      const headers = header.split(',');

      const firstnameIndex = headers.indexOf('firstname');
      const fieldIndex = headers.indexOf('field');

      if (firstnameIndex === -1 || fieldIndex === -1) {
        reject(new Error('Invalid CSV format: missing firstname or field column'));
        return;
      }

      const result = rows.reduce((acc, line) => {
        const columns = line.trim().split(',');
        const firstname = columns[firstnameIndex];
        const field = columns[fieldIndex];

        if (!firstname || !field) return acc;

        return {
          ...acc,
          [field]: [...(acc[field] || []), firstname],
        };
      }, {});

      resolve(result);
    });
  });

export default readDatabase;
