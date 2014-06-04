var express = require('express');
var router = express.Router();

/* GET quiz data. */
router.get('/', function(req, res) {
  res.send('quiz data goes here');
});

module.exports = router;
