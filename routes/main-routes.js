const express = require('express');
const router = express.Router();
const basePath = '/';

router.get(basePath, (req, res) => {
    res.status(200).json('Hello World');
});

module.exports = router;
