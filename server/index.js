require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/User');

const User = mongoose.model('users')

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(bodyParser.json());

<<<<<<< HEAD
new User({ userName: 'Bears Team 6' }).save();

=======
>>>>>>> development
app.get('/test', (req, res) => res.send('Hello from the server.'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
