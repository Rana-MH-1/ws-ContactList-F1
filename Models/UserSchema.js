const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email : {type:String,
    required:true,
    unique:true,
    match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please type a valid email']
},
    password:String
})

module.exports = mongoose.model('User2',UserSchema )