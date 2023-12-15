const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin_parkhi:Parkhi123@cluster0.ycvd3.mongodb.net/hire",

    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Data base is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
