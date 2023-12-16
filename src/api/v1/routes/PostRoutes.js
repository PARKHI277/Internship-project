const express = require("express");
const { isUserAuthorized } = require("../middleware/auth.middleware");
const Router = express.Router();

const { createPost, getAllPosts } = require("../controller/PostController");

/*
    METHOD : POST
    Body: content
    DESCRIPTION: post content
**/
Router.post("/", isUserAuthorized, createPost);

/*
    METHOD : GET
    DESCRIPTION: Get all posts
**/

Router.get("/", getAllPosts);
module.exports = Router;
