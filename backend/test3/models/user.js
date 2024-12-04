const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test3");
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    imgurl:String
})
module.exports = mongoose.model("user",userSchema);