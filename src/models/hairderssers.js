const mongoose = require("mongoose");

const HairdressersSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String },
  instagram: { type: String },
  description: { type: String },
  //services: { type: [String] },
  services: {
    ref: "Services",
    type: mongoose.Schema.Types.ObjectId,
  },
  workDays: { type: [String] },

});

const Hairdressers = mongoose.model("Hairdressers", HairdressersSchema);

module.exports = Hairdressers;
