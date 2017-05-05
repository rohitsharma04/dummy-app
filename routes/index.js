var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dummy App' });
});

router.get('/v2/catalog', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(require('../catalog.json'));
});

module.exports = router;
