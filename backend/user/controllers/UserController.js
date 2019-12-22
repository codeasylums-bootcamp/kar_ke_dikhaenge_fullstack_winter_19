const UserModel = require("../models/User");

module.exports = {
    getUser(req,res){
        // res.send("OK USER")
        let id = req.params.id;
        // console.log(id);
        UserModel.findById(id,(err,result)=>{
            if (err) {
              res.status(500);
              res.send("error");
              return;
            }
            if (!result) {
              res.status(401);
              res.send("NAI DUNGI!!");
              return;
            }
            res.send(result);
        })
    }
}