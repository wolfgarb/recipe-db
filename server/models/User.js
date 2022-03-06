const { Schema, model } = require('mongoose');

// this will be used later for encrypting passwords
// const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
});

// later we will create virtuals
// refer to RR or mariana-entrenched

const User = model('User', userSchema);

module.exports = User;
