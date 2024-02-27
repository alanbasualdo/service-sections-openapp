const { Schema, model } = require("mongoose");

const companySchema = new Schema(
  {
    name: {
      type: String,
    },
    cuit: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Company", companySchema);
