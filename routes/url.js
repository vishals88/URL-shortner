const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url');
const { wrapper } = require('../utils/errorWrap');
const { urlValidation } = require('../validations/urlValidation')
const validationError = require('../middleware/validationError')
const checkAuth = require('../middleware/checkAuth');

router.post('/', checkAuth, urlValidation, validationError, wrapper(urlController.longUrl));

router.get('/:shortUrl', validationError, wrapper(urlController.shortUrl));

module.exports = router;