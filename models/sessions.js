const { Schema, Types, model } = require('mongoose');

const sessionsSchema = new Schema({
  _id: { type: Types.ObjectId },
  user_id: { type: String },
  jwt: { type: String },
});

const Sessions = new model('sessions', sessionsSchema);

module.exports = { Sessions };