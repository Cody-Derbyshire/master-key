const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDataSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true, default: 'codyderbyshire' },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
      },
    },
  }
);

const userData = mongoose.model('userData', userDataSchema);

module.exports = userData;
