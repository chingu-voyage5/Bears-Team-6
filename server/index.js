require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
require('./models/User');
const fs = require('fs');

const User = mongoose.model('users');

mongoose.connect(process.env.MONGO_URI);

const readability = require('./utils/readability');

const app = express();
app.use(bodyParser.json());

app.post('/api/readability', (req, res) => {
  const { text } = req.body;
  const gradeLevel = readability(text).toFixed(2);
  res.send({ gradeLevel });
});

// If we aren't in development then host the built client files in our node instance.
var env = process.env.NODE_ENV;
if (env != 'development') {
  if (!fs.existsSync('../client/build')) {
    process.stderr.write(
      "'../client/build' missing. Make sure the client files are getting built or run in with NODE_ENV=development\n"
    );
    process.exit(1);
  }
  app.use(express.static('../client/build'));
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
