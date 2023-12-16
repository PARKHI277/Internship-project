const User = require("../models/UserModel");
const Post = require("../models/PostModel");
const Comment = require("../models/CommentModel");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const createComment = async (req, res) => {
  try {
    const { post_id } = req.query;
    const { content } = req.body;
    const user_id = req.user.userId;

    const comment = new Comment({
      post_id,
      user_id,
      content,
    });

    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get comments for a specific post
const getCommentsForPost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const comments = await Comment.find({ post_id }).exec();
    res.json(comments);
  } catch (error) {
    console.error("Error getting comments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createComment, getCommentsForPost };
