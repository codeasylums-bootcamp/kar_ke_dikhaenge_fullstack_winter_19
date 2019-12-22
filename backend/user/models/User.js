const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const constants = require("../constants")

const UserSchema = mongoose.Schema({
    email:String,
    password:String,
});

UserSchema.methods.generateJwtToken = (_id) => {
    const token = jwt.sign({_id:_id}, 
        constants.JWT_SECRET,
        {expiresIn:'1h'})
    return token;
}

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;