const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  group: { type: String },
  pool: {type: [{
    service: {type: String},
    price: {type: Number}
  }]}
});

const Services = mongoose.model("Services", ServicesSchema);

module.exports = Services;