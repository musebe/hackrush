const express = require('express');
const imageController = require('./imageController');
const upload = require('./cloudinaryUploads/multer');

const router = express.Router();

router.post('/addImage', upload.any(), imageController.createApp);

module.exports = router