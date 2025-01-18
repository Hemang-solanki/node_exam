const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    userId: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
    date: { type: String,},
  },
  {
    versionKey: false,
  }
);

const BlogModel = mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
