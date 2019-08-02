var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users API');
});

router.get('/all/', function(req, res, next) {
  res.send('all users');
});


router.put('/user/', function(req, res, next) {
  res.send('PUT user');
});
router.post('/user/', function(req, res, next) {
  res.send('POST user');
});
router.delete('/user/', function(req, res, next) {
  res.send('DELETE user');
});


//
module.exports = router;
