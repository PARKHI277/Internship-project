const express = require("express");
const { isUserAuthorized } = require("../middleware/auth.middleware");
const Router = express.Router();
const commentController = require("../controller/CommentController");

/*
    METHOD : POST
    Body: content
    query : post_id(post_id)
    DESCRIPTION: comment on post
**/
Router.post("/comments", isUserAuthorized, commentController.createComment);

/*
    METHOD : GET
    METHOD : GET
    params : post_id
    DESCRIPTION: Get comments on particular post 
**/
Router.get("/posts/:post_id", commentController.getCommentsForPost);

module.exports = Router;
