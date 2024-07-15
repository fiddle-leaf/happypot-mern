/**
 * Import dependencies
 */
require("dotenv").config(); // load ENV variables
const mongoose = require("mongoose");

/**
 * Database connection
 */
// constant inputs for connection fx
const MONGO_URI = process.env.MONGO_URI;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// establish connection
mongoose.connect(MONGO_URI, CONFIG);

// connection events: opens/disconnects/error
mongoose.connection
    .on("open", () => console.log("Connected!"))
    .on("close", () => console.log("Disconnected."))
    .on("error", (error) => console.log(error));

/**
 * Export connection
 */
module.exports = mongoose;