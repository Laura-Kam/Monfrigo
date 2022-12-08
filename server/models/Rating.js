const mongoose = require("mongoose");

const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    rating: {
      // 4
      type: Number,
      required: true,
    },
    user: {
      // user A
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    recipeApiId: String,
  },
  { timestamps: true }
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
