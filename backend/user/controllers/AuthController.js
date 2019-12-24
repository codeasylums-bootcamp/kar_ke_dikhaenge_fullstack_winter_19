const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const express = require("express");
const RestModel = require("../models/Rest");
const MenuModel = require("../models/Menu");
const restBookModel = require("../models/restBook");

const app = express();

// app.use("/frontend", express.static(__dirname + "/login-signup-page"));

module.exports = {
  register(req, res) {
    // res.send("OK");
    let { username, email, password, usertype } = req.body;
    // TODO validate email password
    bcrypt.hash(password, saltRounds, function(err, hash) {
      password = hash;
      let user = new UserModel({ username, email, password, usertype });
      user.save((err, result) => {
        if (err) {
          res.status(500);
          res.send();
          return;
        }
        res.send("USER UPDATED");
      });
    });
  },

  login(req, response) {
    // response.header("Access-Control-Allow-Origin", "*");
    let { username, password } = req.body;
    // console.log(req.body(req.body));

    UserModel.findOne({ username }, (err, result) => {
      if (err) {
        response.status(500);
        response.send("error");
        return;
      }
      let userType = result.usertype;
      // console.log(userType);
      bcrypt.compare(password, result.password, (err, res) => {
        // res == true
        if (err) {
            response.status(500);
            response.send("error");
            return;
          }
        if (res == true) {
          if (!result) {
            response.status(401);
            response.send({ error: "unauthorised" });
            return;
          }

          // console.log(userType);

          response.send({ jwt: result.generateJwtToken(result._id) });
          
          return;
        }

        response.status(401);
        response.send("PASSWORD GALAT HAI BHSDK!!");
      });
    });
  },

  restRegister(req, res) {
    let {
      rest_name,
      rest_email,
      rest_contact,
      rest_address,
      rest_password
    } = req.body;
    // TODO validate email password
    bcrypt.hash(rest_password, saltRounds, function(err, hash) {
      rest_password = hash;
      let restaurant = new RestModel({
        rest_name,
        rest_email,
        rest_contact,
        rest_address,
        rest_password
      });
      restaurant.save((err, result) => {
        if (err) {
          res.status(500);
          res.send();
          return;
        }
        res.send("RESTAURANT UPDATED");
      });
    });
  },

  menu(req, res) {
    let {
      rest_id,
      item_no,
      item_name,
      item_description,
      item_price,
      item_category
    } = req.body;

    let menuData = new MenuModel({
      rest_id,
      item_no,
      item_name,
      item_description,
      item_price,
      item_category
    });

    menuData.save((err, result) => {
      if (err) {
        res.status(500);
        res.send();
        return;
      }
      res.send("MENU UPDATED");
    });
  },

  restBook(req, res) {
    let { rest_name, max_people, timing } = req.body;

    let restBookData = new restBookModel({
      rest_name,
      max_people,
      timing
    });

    restBookData.save((err, result) => {
      if (err) {
        res.status(500);
        res.send();
        return;
      }
      res.send("BOOKING UPDATED");
    });
  },

  userData(req, res) {
    // response.header("Access-Control-Allow-Origin", "*");
    let { username, password } = req.body;
    // console.log(req.body(req.body));

    UserModel.findOne({ username }, (err, result) => {
      if (err) {
        response.status(500);
        response.send("error");
        return;
      }
      let userType = result.usertype;
      if(userType === "customer") {
        res.send("customer");
      }
    });
  }
};
