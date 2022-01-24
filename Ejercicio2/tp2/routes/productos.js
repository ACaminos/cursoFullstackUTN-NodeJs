var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/productos', function(req, res, next) {
  res.send('Recibiendo productos');
});

module.exports = router;
