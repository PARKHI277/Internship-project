const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    unique: true,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Please enter a valid 10-digit phone number",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      },
      message:
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character.",
    },
  },
  refreshToken: {
    type: String,
  },
});
UserSchema.pre("save", async function (next) {
  try {
    // check if the password field is present or not
    if (!this.password) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
