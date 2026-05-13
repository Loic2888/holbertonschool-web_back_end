const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text');
  const db = process.argv[2];
  try {
    await countStudents(db);
    res.send('This is the list of our students');
  } catch (err) {
    res.send(`This is the list of our students\n${err.message}`);
  }
});

app.listen(1245);

module.exports = app;
