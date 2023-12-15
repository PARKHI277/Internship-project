const express = require("express");
const cors = require("cors");
const app = express();
require("./src/api/v1/config/db");

const UserRoutes = require("./src/api/v1/routes/UserRoute");

app.use(express.json());
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`connection succesful  at port ${port}`);
});
