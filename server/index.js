require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/User');
const fs = require('fs')

const User = mongoose.model('users')

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(bodyParser.json());

new User({ userName: 'Bears Team 6' }).save();

app.get('/test', (req, res) => res.send('Hello from the server.'));


// If we aren't in development then host the built client files in our node instance.
var env = process.env.NODE_ENV;
if (env != 'development'){
  if(! fs.existsSync('../client/build')){
    process.stderr.write("'../client/build' missing. Make sure the client files are getting built or run in with NODE_ENV=development\n")
    process.exit(1)
  }
  app.use(express.static('../client/build'));
  
}


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
