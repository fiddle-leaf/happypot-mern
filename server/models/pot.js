/**
 * Import dependencies
 */
const mongoose = require("./connection");

/**
 * Define model
 */
// schema and model from mongoose
const {Schema, model} = mongoose;

// make pots schema
const potsSchema = new Schema({
    name: String,
    plant: String,
    potType: String,
    watered: Boolean,
});

// make pot model
const Pot = model("Fruits", potsSchema);

/**
 * Export model
 */
module.exports = Pot;   