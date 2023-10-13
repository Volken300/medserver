const mongoose = require('mongoose');
const { stringify } = require('querystring');
const formsc=mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    date:Date
});

module.exports=mongoose.model("profile",formsc);