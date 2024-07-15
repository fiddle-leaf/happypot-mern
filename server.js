require("dotenv").config(); // Load ENV Variables
const express = require("express"); // imPORT express
const morgan = require("morgan"); //imPORT morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
console.log(PORT, MONGO_URI)

const app = express();
/*
* Database Connection
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


app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})