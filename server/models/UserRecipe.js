const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Rating = require('./Rating');



const userRecipeSchema = new Schema({
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
},
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
},
{ timestamps: true });

const Recipe = mongoose.model('UserRecipe', recipeSchema);



module.exports = Recipe;