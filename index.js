const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./src/api/v1/config/db");
const helmet = require("helmet");

const UserRoutes = require("./src/api/v1/routes/UserRoute");
const PostRoutes = require("./src/api/v1/routes/PostRoutes");
const CommentRoutes = require("./src/api/v1/routes/CommentRoutes");

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  console.log("Working fine");
  res.status(200).json({ success: true, message: "Working fine" });
});

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/comment", CommentRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`connection succesful  at port ${port}`);
});
