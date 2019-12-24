const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const constants = require("../constants");

const TableSchema = mongoose.Schema({
  table_id1: Number,
  table_id2: Number,
  table_id4: Number,
  table_id8: Number,
});

const MenuModel = mongoose.model("Table", TableSchema);

module.exports = TableModel;
