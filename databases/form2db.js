var mongoose = require('mongoose');

const shemaF2 = mongoose.Schema({
    line1:{type:String},
    line2:{type:String},
    city:{type:String},
    statee:{type:String},
    zipcode:{type:Number},
    phoneNo: {type:Number,required:true}
})

const form2db = mongoose.model('adressInfo', shemaF2);


module.exports.form2db = form2db;
