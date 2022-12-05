const mongoose = require("mongoose");

const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    userId: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    recipeId: {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
      },
    },
  },
  { timestamps: true }
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
