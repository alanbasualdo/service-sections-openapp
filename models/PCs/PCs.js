const { Schema, model } = require("mongoose");

const pcsSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: Schema.Types.ObjectId,
      ref: "Models",
      required: true,
    },
    disk: {
      type: Schema.Types.ObjectId,
      ref: "Disks",
      required: true,
    },
    ram: {
      type: Schema.Types.ObjectId,
      ref: "RAM",
      required: true,
    },
    processor: {
      type: Schema.Types.ObjectId,
      ref: "Processors",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
    },
    graphicCard: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("PCs", pcsSchema);
