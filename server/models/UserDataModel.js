const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDataSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, required: true },
});

const userData = mongoose.model('userData', userDataSchema);

module.exports = userData;
