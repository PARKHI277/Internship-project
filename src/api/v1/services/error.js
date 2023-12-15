const handleDuplicateKeyError = (error, res) => {
  const field = Object.keys(error.keyValue);
  const code = 409;
  const err = `${field} already exists.`;
  res.status(code).send({ success: false, message: err });
};

const handleCastError = (error, res) => {
  const field = Object.keys(error.keyValue);
  const code = 409;
  res.status(code).send({ success: false, message: "field" });
};
const handleValidationError = (error, res) => {
  let errors = Object.values(error.errors).map((el) => el.message);
  let fields = Object.values(error.errors).map((el) => el.path);
  let code = 400;

  if (
    (fields[0] == "eventDate" || fields[0] == "lastDate") &&
    errors[0].slice(0, 12) === "Cast to date"
  ) {
    res.status(code).send({ success: false, message: "Invalid date format" });
  } else {
    res.status(code).send({ success: false, message: errors[0] });
  }
};

//error controller function
module.exports = (error, req, res, next) => {
  try {
    console.log("you hit the error middleware");
    if (error.errors.name === "CastError")
      return (err = handleCastError(error, res));
    if (error.name === "ValidationError")
      return (err = handleValidationError(error, res));
    if (error.code && err.code == 11000)
      return (err = handleDuplicateKeyError(error, res));
  } catch (err) {
    console.log(err);
    res.status(500).send("An unknown error occured.");
  }
};
