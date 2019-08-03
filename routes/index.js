var express = require('express');
var router = express.Router();

// dependencies
const { checkConnection } = require('../utils/sequelize')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Act API | 0.1.0' });
});
//
router.get('/ormCheck',function(request,response,next){
	const result = checkConnection();
	response.send(result);
});
//
module.exports = router;
