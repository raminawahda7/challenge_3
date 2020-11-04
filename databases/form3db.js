var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const shemaF3 = mongoose.Schema({
    cardNumber:{type:Number,unique:true},
    expiryDate:{type:Date},
    cvv:{type:Number},
    zipcode: {type:Number,required:true}
})

const form3db = mongoose.model('creditInfo', shemaF3);


module.exports.form3db = form3db;
