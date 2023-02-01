const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    userPassword: String,
    date: {
        type: Date,
        default: Date.now
    },
    userContacts :[
        {
            contactName:String,
            contactEmail:String,
            chatId:String
        }
    ]

});

module.exports =
    mongoose.models.User || mongoose.model('User', usersSchema);