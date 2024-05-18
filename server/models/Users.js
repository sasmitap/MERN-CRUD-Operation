const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    mobilenumber : Number,
    age :  Number 
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel