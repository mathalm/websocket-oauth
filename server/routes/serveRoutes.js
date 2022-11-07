const express = require('express');
const cors = require('cors')
const router = express.Router();

const controller = require('../controller/InfoGoogleController');

router.post('/saveInfosLogin', controller.post)
router.get('/verifyEmailAlreadyExist/:email', controller.get)

module.exports = router