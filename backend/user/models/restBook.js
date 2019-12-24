const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const constants = require("../constants");

const restBookSchema = mongoose.Schema({
    rest_name:String,
    max_people:String,
    timing:String
});

const restBook = mongoose.model("restBooking", restBookSchema);

module.exports = restBook;
