const express = require('express');
const router = express.Router()
const userController = require('../controllers/user')
const { wrapper } = require("../utils/errorWrap");
const { userValidation } = require('../validations/userValidation')
const validationError = require('../middleware/validationError')


router.post('/signup',validationError, wrapper(userController.signUp));

router.post('/login', validationError, wrapper(userController.logIn));

module.exports = router;
