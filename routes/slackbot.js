var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ message: 'hooray! welcome to our apiXX!' });
});


module.exports = router;
