const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In third mw');
    res.send('default route');
});

module.exports = router;