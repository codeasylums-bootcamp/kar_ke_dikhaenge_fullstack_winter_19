const jwt = require("jsonwebtoken");
const constants = require("./constants");


module.exports = {
    checkAuth(req,res,next){

        let authHeader = req.header("Authorization");
        jwt.verify(authHeader, constants.JWT_SECRET,
             (err,result) => {
                 if(err)
                 {
                     res.status(500);
                     res.send({"error":"unauthorised"});
                 }
                //  res.send(result);
                // console.log(result);
                req.id = result._id;
                
                if((req.id!=req.params.id) && req.params.id){
                    res.status(401);
                    res.send("NAI DUNGI!!");
                    return;
                }
                next();
                
             })
    },
}