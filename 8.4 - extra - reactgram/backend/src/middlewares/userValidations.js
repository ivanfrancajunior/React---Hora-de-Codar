const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("Name is required.")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters."),
    body("email")
      .isString()
      .withMessage("E-mail is required.")
      .isEmail()
      .withMessage("Enter a valid e-mail address."),
    body("password")
      .isString()
      .withMessage("Password is required.")
      .isLength({ min: 5 })
      .withMessage("The password needs at least 5 characters."),
    body("confirmPassword")
      .isString()
      .withMessage("Password confirmation is required.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("The passwords fields are not the same.");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("E-mail is required.")
      .isEmail()
      .withMessage("Enter a valid e-mail address."),
      body("password")
      .isString()
      .withMessage("Password is required.")
      .isLength({ min: 5 })
      .withMessage("The password needs at least 5 characters."),
  ];
};

module.exports = { userCreateValidation,loginValidation };
