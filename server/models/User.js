const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  Messages: [{
    body: String,
    sent: Date,
    analysis: [{processor: String, processed: Date, result: String}]
  }],
  storeMessages: Boolean,
  showStats: Boolean
})

mongoose.model('users', userSchema);
