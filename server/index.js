require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const readability = require('./utils/readability');

const app = express();
app.use(bodyParser.json());

app.get('/test', (req, res) => res.send('Hello from the server.'));

app.post('/api/readability', (req, res) => {
  const { text } = req.body;
  const gradeLevel = readability(text).toFixed(2);
  res.send({ gradeLevel });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
