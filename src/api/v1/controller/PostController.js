const User = require("../models/UserModel");
const Post = require("../models/PostModel");
const Comment = require("../models/CommentModel");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const createPost = async (req, res) => {
  try {
    const { content } = req.body;

    // getting user_is using middleware
    const user_id = req.user.userId;

    const post = new Post({
      user_id,
      content,
    });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.json(posts);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createPost, getAllPosts };
