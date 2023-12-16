const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  post_id: "string",
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: "string",
  timestamp: "timestamp",
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
