const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, required: true },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
