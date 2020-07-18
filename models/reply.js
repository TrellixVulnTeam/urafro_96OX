const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema({
  author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String,
      avatarUrl: String
    },
    text: String
});

module.exports = mongoose.model("Reply", ReplySchema);