const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;



module.exports = {
    register(req,res){
        // res.send("OK");
        let {username,email,password,usertype} = req.body;
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

    login(req,response){
        let {username,password} = req.body;
        UserModel.findOne({username},(err,result) => {
              if (err) {
                response.status(500);
                response.send("error");
                return;
              }
            bcrypt.compare(password, result.password, (err, res) => {
              // res == true
              if(res==true)
              {
                if (err) {
                response.status(500);
                response.send("error");
                return;
                }
                if (!result) {
                response.status(401);
                response.send({ error: "unauthorised" });
                return;
                }

                console.log(result);
                response.send({ jwt: result.generateJwtToken(result._id) }); 
                return;                 
              }

              response.status(401);
              response.send("PASSWORD GALAT HAI BHSDK!!");
            });
        })
    }

}