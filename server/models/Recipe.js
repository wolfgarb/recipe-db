const { Schema, model } = require('mongoose');

// helper to format date
// const dateFormat = require('../utils/dateFormat');


// how data will be structured on main page...
// card
// card content
// title
// image
// cook time

// clicking on card will take you to single media page with more details

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  totalCookTime: { type: String },
  ingredients: [
    {
      type: String
    }
  ],
  directions: {
    type: String,
    required: true
  },
  image: { type: String },
  link: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
