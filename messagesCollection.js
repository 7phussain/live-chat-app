const mongoose = require("mongoose")
const messagesSchema = new mongoose.Schema({
    user1:String,
    user2:String,
    messages: [
        {
            sender: String,
            message: String,
            date: String
        }
    ]

});

module.exports =
    mongoose.models.Message || mongoose.model('Message', messagesSchema);