const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Rating = require('./Rating');

/* const ingredientSchema = new Schema({
  product:{
    type: String,
    required: true,
  },
}); */

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cookingInstruction: {
    type: String,
    // required: true,
  },
  ingredients: [String],
  rating: {
    type: Schema.Types.ObjectId,
    ref: 'Rating'
  },
},
{ timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);



module.exports = Recipe;