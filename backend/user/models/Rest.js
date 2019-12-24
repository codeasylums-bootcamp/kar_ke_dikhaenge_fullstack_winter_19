const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const constants = require("../constants");


const RestSchema = mongoose.Schema({
  rest_name: String,
  rest_email: String,
  rest_contact: Number,
  rest_address: String,
  rest_menu_id: String,
  rest_table_id: String,
  rest_password: String
});

const RestModel = mongoose.model("restaurant", RestSchema);

module.exports = RestModel;
