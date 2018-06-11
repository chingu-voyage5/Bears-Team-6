const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');

const User = mongoose.model('users')

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

new User({ userName: 'Bears Team 6'}).save();

app.get('/test', (req, res) => res.send('Hello from the server.'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
