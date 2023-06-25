// Import dependencies
const express = require('express');
const AnimalModel = require('../models/animals');

const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.send('hello world')
});


// export
module.exports = router;