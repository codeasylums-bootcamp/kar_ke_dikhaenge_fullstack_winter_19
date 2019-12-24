const express = require("express");
const mongoose = require("mongoose");
const constants = require("./constants");
const bodyParser = require("body-parser");
const middlewares = require("./middleware");
// const cors = require('cors');

const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");

mongoose.connect(constants.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(
  "/frontend",
  express.static(__dirname + "/public/frontend/userLogin-Register")
);
app.use(
  "/customer",
  express.static(__dirname + "/public/frontend/dashboard/tableBooking.html")
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

app.post("/register",AuthController.register);
app.post("/login",AuthController.login);
app.get("/users/:id", middlewares.checkAuth,UserController.getUser);

app.post("/restRegister",AuthController.restRegister);

app.post("/menu",AuthController.menu);
// app.post("/table",AuthController.table);

app.post("/restBook",AuthController.restBook)

app.get("/userdata",AuthController.userData)

app.listen(constants.PORT, ()=>{
      console.log(`server is listening on: ${constants.PORT}`);
})

