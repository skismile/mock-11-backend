const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  Title: { type: String, required: true },
  Quantity: { type: Number, required: true },
  Priority: { type: String, required: true },
  Description: { type: String, required: true },

  Date: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
});
   
const ProductModel = model("product", productSchema);

module.exports = ProductModel;
