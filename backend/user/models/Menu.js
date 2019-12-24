const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const constants = require("../constants");

const MenuSchema = mongoose.Schema({
rest_id: String,
item_no: Number,
item_name: String,
item_description: String,
item_price: Number,
item_category: String
  
});

const MenuModel = mongoose.model("Menu", MenuSchema);

module.exports = MenuModel;
