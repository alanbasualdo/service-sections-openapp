const { Schema, model } = require("mongoose");

const subareaSchema = new Schema(
  {
    name: {
      type: String,
    },
    area: {
      type: Schema.Types.ObjectId,
      ref: "Area",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Subarea", subareaSchema);
