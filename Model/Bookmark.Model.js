const { model, Schema } = require("mongoose");

const bookmarSchema = new Schema({
  Title: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Priority: { type: String, required: true },
  Description: { type: String, required: true },

  Date: {
    type: Date,
    default: new Date(),
  },
});

const BookmarkModel = model("bookmark", bookmarSchema);

module.exports = BookmarkModel;
