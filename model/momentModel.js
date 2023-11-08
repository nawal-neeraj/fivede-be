const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const momentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tag: {
      type: [],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("moment", momentSchema);
