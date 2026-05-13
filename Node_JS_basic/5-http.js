const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    const dbPath = process.argv[2];

    const originalLog = console.log;
    const lines = [];
    console.log = (msg) => lines.push(msg);

    try {
      await countStudents(dbPath);
    } catch (err) {
      console.log = originalLog;
      res.end(`This is the list of our students\n${err.message}`);
      return;
    }

    console.log = originalLog;
    res.end(`This is the list of our students\n${lines.join('\n')}`);
    return;
  }

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
