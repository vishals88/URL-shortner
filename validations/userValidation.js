const { body } = require("express-validator");
const models = require("../models");
const sequelize = models.Sequelize;
const Op = sequelize.Op;

exports.addUserValidation = [
  body("userName")
  .not()
  .isEmpty().withMessage("User name is required"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .custom(async value => {
      if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return Promise.reject("Invalid email");
      }
    })
    .custom(async value => {
      return await models.user
        .findOne({
          where: {
            email: {
              [Op.iLike]: value,
            },
            isActive: true,
          },
        })
        .then(email => {
          if (email) {
            return Promise.reject("Email already exists !");
          }
        });
    }),
  body("password")
  .not()
  .isEmpty().withMessage("Password is required"),
]