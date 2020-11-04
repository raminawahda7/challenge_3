var mongoose = require('mongoose');

const shemaF1 = mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    email:{type:String},
    password:{type:String,required: true}
})

const form1db = mongoose.model('userInfo', shemaF1);


module.exports.form1db = form1db;
