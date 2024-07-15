/**
 * Import Dependencies
 */

require("dotenv").config(); // Load ENV Variables
const express = require("express");
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require("morgan"); 
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


const app = express();

app.use(logger('dev'));
app.use(express.json());

/**
 * MIDDLEWARE 
 * serve-favicon & static middleware
 * to serve from the production 'build' folder*/
 
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/*
* DATABASE CONNECTION
*/

const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// establish mongodb connection
mongoose.connect(MONGO_URI, CONFIG);

// events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

/**
 * ROUTES
 */

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html' ));
});
/**
 * SERVER LISTENER 
 */
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})