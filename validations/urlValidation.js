const { body } = require('express-validator')


exports.urlValidation = [

    body('longUrl')
        .not()
        .isEmpty().withMessage("Password is required")
        .isURL()
        .withMessage('URL is not valid')

]
