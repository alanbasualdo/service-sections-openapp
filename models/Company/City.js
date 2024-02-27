const { Schema, model } = require("mongoose");

const citySchema = new Schema(
  {
    name: {
      type: String,
    },
    province: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("City", citySchema);
