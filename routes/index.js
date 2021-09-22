const express = require('express')
const router = express.Router();


const url = require('./url');
router.use('/url', url);

const user = require('./user');
router.use('/user', user);


module.exports = router;