const express = require("express");
const {
  RegisterUser,
  LoginUser,
  logoutUser,
  getRefreshToken,
  getUserById,
  resSetPassword,
  updateUserById,
  deleteUserById,
  getAllUsers,
} = require("../controller/UserController");
const { isUserAuthorized } = require("../middleware/auth.middleware");
const Router = express.Router();

/*
    METHOD : POST
    Body: name, email, phone, password
    DESCRIPTION: User Register
**/
Router.post("/register", RegisterUser);

/*
    METHOD : POST
    Body: email , password
    DESCRIPTION: User Login with authorization
**/
Router.post("/login", LoginUser);

/*
    METHOD : GET
    Query: refreshTokem
    DESCRIPTION: User Login with authorization
**/
Router.get("/refresh-token", getRefreshToken);

/*
    METHOD : POST
    Query: oldPassword,newPassword
    DESCRIPTION:  reset password
**/
Router.post("/reset-password/:id", isUserAuthorized, resSetPassword);

/*
    METHOD : GET
    DESCRIPTION: get all users
**/

Router.get("/all", getAllUsers);

/*
    METHOD : GET
    params : id(userId)
    DESCRIPTION: get User by id
**/

Router.get("/:id", isUserAuthorized, getUserById);

/*
    METHOD : PUT
    params : id(userId)
    DESCRIPTION: update User by id
**/
Router.put("/:id", isUserAuthorized, updateUserById);

/*
    METHOD : DELETE
    params : id(userId)
    DESCRIPTION:  delete user by id
**/
Router.delete("/:id", isUserAuthorized, deleteUserById);

/*
    METHOD : POST
    body : refreshToken
    DESCRIPTION:  logout user
**/
Router.post("/logout", isUserAuthorized, logoutUser);

module.exports = Router;
