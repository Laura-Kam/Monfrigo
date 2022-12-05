const mongoose = require('mongoose');


const { Schema } = mongoose;

const ratingSchema = new Schema({
  rating:{
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  },
},
{ timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;