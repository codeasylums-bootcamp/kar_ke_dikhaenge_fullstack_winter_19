const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const constants = require("../constants")

const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    usertype:String
});

UserSchema.methods.generateJwtToken = (_id) => {
    const token = jwt.sign({_id:_id}, 
        constants.JWT_SECRET,
        {expiresIn:'48h'})
    return token;
}

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;