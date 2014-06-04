var express = require('express');
var router = express.Router();

/**
 GET Style Guide page
 The main purpose of this page is a quick reference to all css components which come with the
 responsive html framework.
*/
router.get('/', function(req, res) {
  res.render('styleGuide', { title: 'Express' });
});

module.exports = router;
